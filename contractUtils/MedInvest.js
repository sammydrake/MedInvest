export const MY_ADDRESS = "0x8e53E820C70D5f62821A5a81a0C0ff2cC84C0456";
export const MYCONTRACT_ADDRESS = "0x7ff9c78F61F8D208c7Ed994e7105375d884EfE01";
export const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addressFinanceId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "basisPoints",
        type: "uint256",
      },
    ],
    name: "adjustFinanceSpan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "financeId",
        type: "uint256",
      },
    ],
    name: "closeFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "finance",
    outputs: [
      {
        internalType: "uint256",
        name: "financeId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "financier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "financeMaturity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interest",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "earnedInterest",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numDays",
        type: "uint256",
      },
    ],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "lifeSpan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "medAdministrator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numDays",
        type: "uint256",
      },
    ],
    name: "obtainEarnedRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "financeId",
        type: "uint256",
      },
    ],
    name: "obtainFinance",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "financeId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "financier",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "financeMaturity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "token",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "earnedInterest",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOpen",
            type: "bool",
          },
        ],
        internalType: "struct MedInvest.Finance",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "obtainFinanceSpan",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "financier",
        type: "address",
      },
    ],
    name: "obtainFinancierAddreeId",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "presentFinanceId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "financeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newMaturityDate",
        type: "uint256",
      },
    ],
    name: "resetMaturityDate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
