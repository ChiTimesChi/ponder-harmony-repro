export const wOneAbi = [
  {
    inputs: [
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "src",
      },
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "guy",
      },
      {
        indexed: false,
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    type: "event",
    name: "Approval",
    anonymous: false,
  },
  {
    inputs: [
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "dst",
      },
      {
        indexed: false,
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    type: "event",
    name: "Deposit",
    anonymous: false,
  },
  {
    inputs: [
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "src",
      },
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "dst",
      },
      {
        indexed: false,
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    type: "event",
    name: "Transfer",
    anonymous: false,
  },
  {
    inputs: [
      {
        indexed: true,
        internalType: "address",
        type: "address",
        name: "src",
      },
      {
        indexed: false,
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    type: "event",
    name: "Withdrawal",
    anonymous: false,
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "allowance",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "",
      },
    ],
    stateMutability: "view",
    type: "function",
    name: "balanceOf",
  },
  {
    outputs: [
      {
        internalType: "uint8",
        type: "uint8",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "decimals",
  },
  {
    outputs: [
      {
        internalType: "string",
        type: "string",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "name",
  },
  {
    outputs: [
      {
        internalType: "string",
        type: "string",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "symbol",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
  {
    outputs: [],
    inputs: [],
    stateMutability: "payable",
    type: "function",
    name: "deposit",
  },
  {
    outputs: [],
    inputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "withdraw",
  },
  {
    outputs: [
      {
        internalType: "uint256",
        type: "uint256",
        name: "",
      },
    ],
    inputs: [],
    stateMutability: "view",
    type: "function",
    name: "totalSupply",
  },
  {
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "guy",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "approve",
  },
  {
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "dst",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transfer",
  },
  {
    outputs: [
      {
        internalType: "bool",
        type: "bool",
        name: "",
      },
    ],
    inputs: [
      {
        internalType: "address",
        type: "address",
        name: "src",
      },
      {
        internalType: "address",
        type: "address",
        name: "dst",
      },
      {
        internalType: "uint256",
        type: "uint256",
        name: "wad",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    name: "transferFrom",
  },
] as const;
