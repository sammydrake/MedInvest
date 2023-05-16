MEDICAL Finance PLATFORM -MEDINVEST
MedInvest is a transgenerational Medical-Tech Decentralized Finance system that open up opportunity for Share Holders, investors and Business Men/Women to contribute in the capital start-up for the production of medical equipments and pharmacology (drug production) and at the end of sales make some profit from their Finances/capital contributions. This system explores the use of Cutting-Edge Blockchain Technology. This Technology embraces a secure and transparent platform.

NOTICE
PLEASE NOTE : WHEN TESTING THIS DAPP WITH IT URL BELOW, PLEASE USE MATIC'S MUMBAI TESTNET. BUT WHEN TESTING THIS DAPP LOCALLY, PLEASE USE THE SAME TOKEN YOU USED IN DEPLOYING THE SMART CONTRACT TO INVEST IN THE FRONTEND. ie; IF YOU USED MATIC TO DEPLOY THE SMART CONTRACT, USE MATIC TO INVEST AND IF YOU USED GOERLI TO DEPLOY THE SMART CONTRACT, USE GOERLI TO INVEST.

GRANDIDA GROUP PROJECT SUBMISSION CONTRIBUTED BY THE FOLLOWING DEVELOPERS

Samson Okechukwu.

Abeng Epangha.

Vincent Neji.

Victor Chibuike.

Adebayo Blessing.

THE SMART CONTRACT
This is a Smart Contract written in Solidity for managing medical Finances. The contract allows medical investors to make Finances with a specified duration and calculates interest earned on the Finance. The contract also provides functions for the medAdministrator to modify Finance durations and unlock dates, and for investors to retrieve Finance details.

The contract defines a struct called Finance to store Finance information, and creates an instance of this struct called Finance. The contract also defines public variables and mappings to store Finance-related data.

The constructor initializes the medAdministrator, current finance ID, interest rates, and Finance durations. The fund function allows investors to make Finances with a specified duration and calculates interest earned on the Finance. The sumFinanceInterest function calculates the interest earned on an Finance.

The resetMaturityDate function allows the medAdministrator to modify Finance durations and set the interest rate basis points for the specified Finance duration in days. The obtainFinanceSpan function returns the list of Finance durations, and the obtainEarnedRate function returns the interest rate basis points for the specified Finance duration in days.

The obtainFinance function returns the Finance details for the specified finance ID, and the obtainFinancierAddreeId function returns the list of Finance IDs for the specified investor address. The resetMaturityDate function allows the medAdministrator to modify unlock dates for Finances.

Finally, the contract defines a modifier called excludeEmptyAddress to check that an address is not empty, and an closeFund function that allows investors to end their Finances and receive their invested token plus interest earned.

THE FRONT END
Built with Next.js, this interacts with the MedInvest Ethereum smart contract using the Ethers.js library. The component defines state variables to manage the user interface, including amount, signer, provider, contract, Finances, UserAddress, FinanceIds, FinanceInput, FinanceSpan, and FinancePercentage.

The component uses the useEffect hook to initialize the provider and contract state variables when the component mounts. It then defines several helper functions, including getSigner, which retrieves the signer needed to sign transactions on the Ethereum network, daysToMaturity, which calculates the number of days remaining until a maturity date, and convertToEther, which converts a value in wei to ether.

The component also defines a getUserFinances function that retrieves the Finances made by a user using their Finance IDs. The function queries the smart contract for each Finance ID to retrieve the Finance details and then parses the details into an array of objects. The parsed Finances are saved using the setFinances function.

The component also imports several React components and hooks, including FinanceHeader, FinancePlan, FinanceForm, FinanceList, HeroBanner, Header, NavBar, Footer, useEffect, and useState. It also imports icons from the react-icons library and the ethers library for interacting with the Ethereum blockchain.

DEPENDENCIES
The project uses the following dependencies;

React.js - used to create the frontend of the application
Ethers.js - used to communicate with the Ethereum blockchain
HardHat - used to interact with the Ethereum blockchain
dotenv - used to access environment variables
Tailwindcss - used to style the frontend
react-icons - icons used in the project

How To Clone and Use The Project

1. Clone the project by running the command

git clone https://github.com/sammydrake/MedInvest.git

2. Install the dependencies by running the command

npm i

3. Run the application by running the command

npm run dev

4. Connect your wallet to the application Make your Finance.
