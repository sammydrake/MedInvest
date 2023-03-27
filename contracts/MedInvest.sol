// SPDX-License-Identifier: MIT
// This contract is designed to facilitate medical financing using blockchain technology.


pragma solidity 0.8.19;

contract MedInvest {
    
    address public medAdministrator;
    
    // Define the Finance struct
    struct Finance {
         uint financeId;
         address financier;
         uint start;
         uint financeMaturity;
         uint interest;
         uint token;
         uint earnedInterest;
         bool isOpen;
        
    }

    Finance investment;
    
    uint public presentFinanceId;
    uint[] financeTimePeriod;
    // Declare variables and mappings
    mapping (uint=> Finance) public finance;
    mapping (address => uint[]) public addressFinanceId;
    mapping (uint => uint) public lifeSpan;

    // Constructor function
    constructor () payable {
        // Set the medical administrator to the contract deployer
        medAdministrator = msg.sender;
        // Set the initial finance ID to 0
        presentFinanceId = 0;
        // Set the lifespan for different finance durations
        lifeSpan[120] = 400;
        lifeSpan[240] = 900;
        lifeSpan[365] = 1600;
        // Add the available finance durations to the financeTimePeriod array
        financeTimePeriod.push(120);
        financeTimePeriod.push(240);
        financeTimePeriod.push(365);
        
    }

    // Function to fund a finance
function fund(uint numDays) external payable {
    // Require that the finance duration is available
        require(lifeSpan[numDays] > 0, 'No Finance Duration');
        // Create a new Finance instance and store it in the finance mapping
        finance[presentFinanceId] = Finance(
            presentFinanceId,
            msg.sender,
            block.timestamp,
            block.timestamp + (numDays * 1 days),
            lifeSpan[numDays],
            msg.value,
            sumFinancialInterest(lifeSpan[numDays], msg.value),
            true
        );

        // Add the finance ID to the array of finances for the sender's address
        addressFinanceId[msg.sender].push(presentFinanceId);
        presentFinanceId += 1;
        
    }
    // Function to calculate the earned interest for a finance
    function sumFinancialInterest(uint basisPoints, uint amountInWei) private pure returns(uint) {
        // Require that the amount being funded is greater than 0
        require(amountInWei > 0, 'Financial amount is incorrect');
        // Calculate the earned interest as a percentage of the amount funded
        uint sumEarnedInterest = basisPoints * amountInWei / 10000;
        
        return sumEarnedInterest;
        
    }
// Function for the medical administrator to adjust the finance lifespan for a given duration
function adjustFinanceSpan(uint numDays, uint basisPoints) external {
    // Require that the caller is the medical administrator
    require (medAdministrator == msg.sender, "Only Medical Administrator can perform this action");
    // Set the lifespan for the given duration
    lifeSpan[numDays] = basisPoints;
    // Add the duration to the available finance durations
    financeTimePeriod.push(numDays);
    
}

// Function to obtain the available finance durations
function obtainFinanceSpan() external view returns(uint [] memory) {
    return financeTimePeriod;
    
}

// Function to obtain the earned interest rate for a given finance duration
function obtainEarnedRate(uint numDays) external view returns(uint) {
    return lifeSpan[numDays];
    
}

// Function to obtain a specific finance by ID
function obtainFinance (uint financeId) external view returns (Finance memory) {
    return finance[financeId];
    
}

//Function to obtain the list of finance IDs for the specified financier address
function obtainFinancierAddreeId(address financier) external view returns(uint[] memory) {
    return addressFinanceId[financier];
    
}

// Function to reset maturity date for a specific finance ID
function resetMaturityDate(uint financeId, uint newMaturityDate) external {
    require (medAdministrator == msg.sender, "Only Medical Administrator can modify unlock dates");
    require(finance[financeId].isOpen == true, 'Finance is closed');
    require(newMaturityDate > finance[financeId].financeMaturity, 'New unlock date must be after the current unlock date');
    finance[financeId].financeMaturity = newMaturityDate;
    
}

// Modifier to exclude empty address
modifier excludeEmptyAddress(address addr) {
    require(addr != address(0), "Address must be filled");
    _;
}

// Function to close a finance and withdraw funds
function closeFund(uint financeId) external excludeEmptyAddress(msg.sender)  {
    require(finance[financeId].financier == msg.sender, 'only fund initiator may modify investment');
    require(finance[financeId].isOpen == true, 'Finance is closed');
    finance[financeId].isOpen = false;
    uint sumAmount = 0;


    // Calculate the sum of the amount to be returned to the financier, including earned interest
    if (block.timestamp > finance[financeId].financeMaturity) {
            
            sumAmount = finance[financeId].token + finance[financeId].earnedInterest;
        } else {
            
            sumAmount = finance[financeId].token;
        }
        
        finance[financeId].token = 0;
        finance[financeId].earnedInterest = 0;

        // Ensure that the sum of the amount to be returned is greater than zero
        require(sumAmount > 0, "Finance amount is zero");

        // Transfer the sum of the amount to be returned to the financier
        (bool success, ) = payable(msg.sender).call{value: sumAmount}('');
        require(success, "Failed to transfer ether");
    }
}

