import { CONTRACT_ABI, MYCONTRACT_ADDRESS } from "../contractUtils/MedInvest";

import HeaderForFinance from "@/components/HeaderForFinance";
import FinancialPlan from "@/components/FinancialPlan";
import FinancialForm from "../components/FinancialForm";
import ListOfFunds from "@/components/ListOfFunds";
import Hero from "../components/Hero";
import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Home = () => {
  const [amount, setAmount] = useState(0);
  const [signer, setSigner] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [Finances, setFinances] = useState([]);
  const [UserAddress, setUserAddress] = useState(null);
  const [FinanceIds, setFinanceIds] = useState([]);
  const [FinanceInput, setFinanceInput] = useState(false);
  const [FinanceTimePeriod, setFinanceTimePeriod] = useState(null);
  const [FinancePercentage, setFinancePercentage] = useState(null);

  useEffect(() => {
    const pageReload = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      const contract = new ethers.Contract(MYCONTRACT_ADDRESS, CONTRACT_ABI);
      setContract(contract);
    };

    pageReload();
  }, []);
  const getSigner = async () => {
    try {
      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      return signer;
    } catch (error) {
      console.error("Error fetching signer:", error);

      window.alert("Unable to get User");

      return null;
    }
  };

  const lifeTimePeriod = (financeMaturity) => {
    if (isNaN(financeMaturity)) {
      console.error("Invalid date:", financeMaturity);

      return 0;
    }

    const currentTime = Date.now() / 1000;

    const secondsLeft = financeMaturity - currentTime;

    return Math.max((secondsLeft / 60 / 60 / 24).toFixed(0), 0);
  };

  const convertToEther = (wei) => ethers.utils.formatEther(wei);

  const obtainFinances = async (ids, signer) => {
    try {
      const queryFunds = await Promise.all(
        ids.map((id) => contract.connect(signer).obtainFinance(id))
      );

      const parsedFunds = queryFunds.map((Finance) => ({
        financeId: Finance.financeId,
        interest: Number(Finance.interest) / 100,
        daysRemaining: lifeTimePeriod(Number(Finance.financeMaturity)),
        etherInterest: convertToEther(Finance.earnedInterest),
        etherFunded: convertToEther(Finance.token),
        isOpen: Finance.isOpen,
      }));

      setFinances(parsedFunds);
    } catch (error) {
      console.error("Error fetching user finances:", error);
    }
  };

  const obtainFinancierAddressId = async (address, signer) => {
    try {
      const FinanceIds = await contract
        .connect(signer)
        .obtainFinancierAddreeId(address);

      return FinanceIds;
    } catch (error) {
      console.error("Error fetching Finance IDs:", error);

      return [];
    }
  };

  const userFinanceLoad = async () => {
    try {
      const signer = await getSigner(provider);

      setSigner(signer);

      const UserAddress = await signer.getAddress();

      setUserAddress(UserAddress);

      const FinanceIds = await obtainFinancierAddressId(UserAddress, signer);

      setFinanceIds(FinanceIds);

      obtainFinances(FinanceIds, signer);
    } catch (error) {
      console.error("Error obtaining user finance:", error);
    }
  };

  const walletConnected = () => {
    if (signer == null) {
      return false;
    }

    if (typeof signer !== "object" || typeof signer.getAddress !== "function") {
      console.error("Invalid signer:", signer);

      window.alert("Invalid Wallet Address, Please connect a valid wallet");
      return false;
    }

    return true;
  };

  const fundButton = (FinanceTimePeriod, FinancePercentage) => {
    if (!walletConnected()) {
      console.error("Wallet is not connected.");

      return window.alert("Please Connect Your Wallet to Fund");
    }

    try {
      setFinanceInput(true);

      setFinanceTimePeriod(FinanceTimePeriod);

      setFinancePercentage(FinancePercentage);
    } catch (error) {
      console.error("Error isOpening staking modal:", error);
    }
  };

  const convertToWei = (ether) => {
    try {
      return ethers.utils.parseEther(ether);
    } catch (error) {
      console.error("Error converting ether to wei:", error);
      return ethers.constants.Zero;
    }
  };

  const fund = async () => {
    try {
      const wei = convertToWei(amount);

      const data = { value: wei };

      await contract.connect(signer).fund(FinanceTimePeriod, data);
    } catch (error) {
      console.error("Error staking ether:", error);
    }
  };

  const getFund = async (financeId) => {
    try {
      await contract.connect(signer).closeFund(financeId);
    } catch (error) {
      console.error("Error withdrawing investment:", error);
    }
  };

  return (
    <div className="App text-center">
      <div>
        {}
        <NavBar walletConnected={walletConnected} connect={userFinanceLoad} />
      </div>
      <Header />
      <Hero />

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <HeaderForFinance />
        <div className="grid gap-8 row-gap-0 grid-cols-3">
          <FinancialPlan
            plan="DRUGS"
            duration="120 DAYS"
            desc="For quick and steady growth, the perfect short-term plan is to invest for 120 days and earn 4% interest."
            onClick={() => fundButton(120, "4%")}
          />

          <FinancialPlan
            plan="MEDICAL EQUIPMENTS"
            duration="240 DAYS"
            desc="A smart choice for those seeking stability and substantial returns is to invest for 240 days and earn 9% interest - making it an ideal long-term investment strategy."
            onClick={() => fundButton(240, "9%")}
          />
          <FinancialPlan
            plan="TREATMENT"
            duration="365 DAYS"
            desc="The ultimate choice for those looking to maximize their returns and reach their financial goals faster is to invest for 365 days and earn a whopping 16% interest - promising a big investment payoff."
            onClick={() => fundButton(365, "16%")}
          />
        </div>
      </div>
      {}
      {Finances.length > 0 && (
        <ListOfFunds finances={Finances} getFund={getFund} />
      )}
      {}
      {FinanceInput && (
        <FinancialForm
          onClose={() => setFinanceInput(false)}
          FinanceTimePeriod={FinanceTimePeriod}
          FinancePercentage={FinancePercentage}
          amount={amount}
          setAmount={setAmount}
          fund={fund}
        />
      )}
      <Footer />
    </div>
  );
};

export default Home;
