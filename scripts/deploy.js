const { ethers } = require("hardhat");

const fs = require("fs");

require("dotenv").config({ path: ".env" });

async function main() {
  const MedInvest = await ethers.getContractFactory("MedInvest");

  const medInvest = await MedInvest.deploy();

  await medInvest.deployed();

  console.log("MedInvest Contract Address:", medInvest.address);
  console.log("MedInvest Owner Address:", medInvest.signer.address);

  fs.writeFileSync(
    "./contractUtils.js",
    `
    export const MY_ADDRESS = "${medInvest.signer.address}"
  export const MYCONTRACT_ADDRESS = "${medInvest.address}"
  `
  );

  console.log("Sleeping.....");

  await sleep(40000);

  await hre.run("verify:verify", {
    address: medInvest.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
