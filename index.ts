
import { ethers } from 'ethers';

// Pool ABI - chỉ include các events chúng ta cần
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

async function listenToPoolEvents() {
  // Kết nối đến Ethereum network
  const provider = new ethers.WebSocketProvider('wss://ethereum-rpc.publicnode.com');
  
  // Địa chỉ của Pool contract
  const POOL_ADDRESS = '0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2';
  
  // Tạo contract interface
  const poolContract = new ethers.Contract(POOL_ADDRESS, POOL_ABI, provider);

  // Lắng nghe sự kiện Supply
  poolContract.on("Supply", (reserve, user, onBehalfOf, amount, referralCode, event) => {
    const log = `Sự kiện Supply: \n` +
        `  - Reserve: ${reserve} \n` +
        `  - Người dùng: ${user} \n` +
        `  - Trên behalf của: ${onBehalfOf} \n` +
        `  - Số lượng: ${ethers.formatEther(amount)} \n` +
        `  - Mã giới thiệu: ${referralCode} \n` +
        `  - Block number: ${event.blockNumber} \n` +
        `  - Transaction hash: ${event.transactionHash} \n`;
      console.log(log);
  });

  // Lắng nghe sự kiện Borrow
  poolContract.on("Borrow", (reserve, user, onBehalfOf, amount, interestRateMode, borrowRate, referralCode, event) => {
    const log = `Sự kiện Borrow: \n` +
    `  - Reserve: ${reserve} \n` +
    `  - Người dùng: ${user} \n` +
    `  - Trên behalf của: ${onBehalfOf} \n` +
    `  - Số lượng: ${ethers.formatEther(amount)} \n` +
    `  - Interest rate mode: ${interestRateMode} \n` +
    `  - Borrow rate: ${borrowRate.toString()} \n` +
    `  - Mã giới thiệu: ${referralCode} \n` +
    `  - Block number: ${event.blockNumber} \n` +
    `  - Transaction hash: ${event.transactionHash} \n`;
  console.log(log);
  });

  // Lắng nghe sự kiện Repay
  poolContract.on("Repay", (reserve, user, repayer, amount, useATokens, event) => {
    const log = `Sự kiện Repay: \n` +
        `  - Reserve: ${reserve} \n` +
        `  - Người dùng: ${user} \n` +
        `  - Người trả nợ: ${repayer} \n` +
        `  - Số lượng: ${ethers.formatEther(amount)} \n` +
        `  - Sử dụng aTokens: ${useATokens} \n` +
        `  - Block number: ${event.blockNumber} \n` +
        `  - Transaction hash: ${event.transactionHash} \n`;
      console.log(log);
  });

  // Lắng nghe sự kiện Withdraw
  poolContract.on("Withdraw", (reserve, user, to, amount, event) => {
    const log = `Sự kiện Withdraw: \n` +
        `  - Reserve: ${reserve} \n` +
        `  - Người dùng: ${user} \n` +
        `  - Đến: ${to} \n` +
        `  - Số lượng: ${ethers.formatEther(amount)} \n` +
        `  - Block number: ${event.blockNumber} \n` +
        `  - Transaction hash: ${event.transactionHash} \n`;
      console.log(log);
  });

  console.log('Started listening to Aave Pool events...');
}

// Chạy hàm chính
listenToPoolEvents().catch((error) => {
  console.error('Error in main function:', error);
});