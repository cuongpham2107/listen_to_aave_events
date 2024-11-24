const POOL_ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "referralCode",
          "type": "uint16"
        }
      ],
      "name": "Supply",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "onBehalfOf",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "interestRateMode",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "borrowRate",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "referralCode",
          "type": "uint16"
        }
      ],
      "name": "Borrow",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "reserve",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "repayer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "useATokens",
          "type": "bool"
        }
      ],
      "name": "Repay",
      "type": "event"
    }
  ];

  export default POOL_ABI;