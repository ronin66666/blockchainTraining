/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC777PresetFixedSupply,
  ERC777PresetFixedSupplyInterface,
} from "../ERC777PresetFixedSupply";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "address[]",
        name: "defaultOperators",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "granularity",
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
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002260380380620022608339810160408190526200003491620007c9565b84848482600290805190602001906200004f929190620005c2565b50815162000065906003906020850190620005c2565b5080516200007b90600490602084019062000651565b5060005b8151811015620000eb57600160056000848481518110620000a457620000a4620008ec565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e28162000918565b9150506200007f565b506040516329965a1d60e01b815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b1580156200016657600080fd5b505af11580156200017b573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b158015620001f957600080fd5b505af11580156200020e573d6000803e3d6000fd5b5050505050505062000247818360405180602001604052806000815250604051806020016040528060008152506200025260201b60201c565b505050505062000a78565b6200026284848484600162000268565b50505050565b6001600160a01b038516620002c45760405162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f206164647265737360448201526064015b60405180910390fd5b60003390508460016000828254620002dd919062000936565b90915550506001600160a01b038616600090815260208190526040812080548792906200030c90849062000936565b909155506200032490508160008888888888620003be565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d8787876040516200036d939291906200097f565b60405180910390a36040518581526001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b1580156200043b57600080fd5b505afa15801562000450573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004769190620009b8565b90506001600160a01b03811615620004f8576040516223de2960e01b81526001600160a01b038216906223de2990620004be908b908b908b908b908b908b90600401620009dd565b600060405180830381600087803b158015620004d957600080fd5b505af1158015620004ee573d6000803e3d6000fd5b50505050620005a9565b8115620005a9576200051e866001600160a01b0316620005b360201b6200093e1760201c565b15620005a95760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a401620002bb565b5050505050505050565b6001600160a01b03163b151590565b828054620005d09062000a3b565b90600052602060002090601f016020900481019282620005f457600085556200063f565b82601f106200060f57805160ff19168380011785556200063f565b828001600101855582156200063f579182015b828111156200063f57825182559160200191906001019062000622565b506200064d929150620006a9565b5090565b8280548282559060005260206000209081019282156200063f579160200282015b828111156200063f57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000672565b5b808211156200064d5760008155600101620006aa565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715620007015762000701620006c0565b604052919050565b60005b83811015620007265781810151838201526020016200070c565b83811115620002625750506000910152565b600082601f8301126200074a57600080fd5b81516001600160401b03811115620007665762000766620006c0565b6200077b601f8201601f1916602001620006d6565b8181528460208386010111156200079157600080fd5b620007a482602083016020870162000709565b949350505050565b80516001600160a01b0381168114620007c457600080fd5b919050565b600080600080600060a08688031215620007e257600080fd5b85516001600160401b0380821115620007fa57600080fd5b6200080889838a0162000738565b96506020915081880151818111156200082057600080fd5b6200082e8a828b0162000738565b9650506040880151818111156200084457600080fd5b8801601f81018a136200085657600080fd5b8051828111156200086b576200086b620006c0565b8060051b92506200087e848401620006d6565b818152928201840192848101908c8511156200089957600080fd5b928501925b84841015620008c257620008b284620007ac565b825292850192908501906200089e565b80985050505050505060608601519150620008e060808701620007ac565b90509295509295909350565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156200092f576200092f62000902565b5060010190565b600082198211156200094c576200094c62000902565b500190565b600081518084526200096b81602086016020860162000709565b601f01601f19169290920160200192915050565b8381526060602082015260006200099a606083018562000951565b8281036040840152620009ae818562000951565b9695505050505050565b600060208284031215620009cb57600080fd5b620009d682620007ac565b9392505050565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c06080820181905260009062000a1a9083018562000951565b82810360a084015262000a2e818562000951565b9998505050505050505050565b600181811c9082168062000a5057607f821691505b6020821081141562000a7257634e487b7160e01b600052602260045260246000fd5b50919050565b6117d88062000a886000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b63711461022b578063dd62ed3e1461023e578063fad8b32a14610277578063fc673c4f1461028a578063fe9d93031461029d57600080fd5b8063959b8c3f146101ea57806395d89b41146101fd5780639bd9bbc614610205578063a9059cbb1461021857600080fd5b806323b872dd116100e957806323b872dd14610183578063313ce56714610196578063556f0dc7146101a557806362ad1b83146101ac57806370a08231146101c157600080fd5b806306e485381461011b57806306fdde0314610139578063095ea7b31461014e57806318160ddd14610171575b600080fd5b6101236102b0565b6040516101309190611208565b60405180910390f35b610141610312565b60405161013091906112a2565b61016161015c3660046112cd565b61039b565b6040519015158152602001610130565b6001545b604051908152602001610130565b6101616101913660046112f9565b6103b3565b60405160128152602001610130565b6001610175565b6101bf6101ba3660046113dd565b6104ea565b005b6101756101cf366004611470565b6001600160a01b031660009081526020819052604090205490565b6101bf6101f8366004611470565b610526565b610141610644565b6101bf61021336600461148d565b610653565b6101616102263660046112cd565b610676565b6101616102393660046114e6565b610729565b61017561024c3660046114e6565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b6101bf610285366004611470565b6107cb565b6101bf61029836600461151f565b6108e7565b6101bf6102ab36600461159f565b61091f565b6060600480548060200260200160405190810160405280929190818152602001828054801561030857602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116102ea575b5050505050905090565b606060028054610321906115e6565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906115e6565b80156103085780601f1061036f57610100808354040283529160200191610308565b820191906000526020600020905b81548152906001019060200180831161037d57509395945050505050565b6000336103a981858561094d565b5060019392505050565b60006001600160a01b0383166103e45760405162461bcd60e51b81526004016103db90611621565b60405180910390fd5b6001600160a01b0384166104495760405162461bcd60e51b815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201526564647265737360d01b60648201526084016103db565b600033905061047a818686866040518060200160405280600081525060405180602001604052806000815250610a74565b610485858285610bab565b6104b1818686866040518060200160405280600081525060405180602001604052806000815250610c37565b6104df8186868660405180602001604052806000815250604051806020016040528060008152506000610d9d565b506001949350505050565b6104f43386610729565b6105105760405162461bcd60e51b81526004016103db90611665565b61051f85858585856001610f71565b5050505050565b336001600160a01b038216141561058b5760405162461bcd60e51b8152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201526330ba37b960e11b60648201526084016103db565b6001600160a01b03811660009081526005602052604090205460ff16156105dc573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff1916905561060b565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b606060038054610321906115e6565b61067133848484604051806020016040528060008152506001610f71565b505050565b60006001600160a01b03831661069e5760405162461bcd60e51b81526004016103db90611621565b60003390506106cf818286866040518060200160405280600081525060405180602001604052806000815250610a74565b6106fb818286866040518060200160405280600081525060405180602001604052806000815250610c37565b6103a98182868660405180602001604052806000815250604051806020016040528060008152506000610d9d565b6000816001600160a01b0316836001600160a01b0316148061079457506001600160a01b03831660009081526005602052604090205460ff16801561079457506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b806107c457506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b03811633141561082e5760405162461bcd60e51b815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f6044820152603960f91b60648201526084016103db565b6001600160a01b03811660009081526005602052604090205460ff1615610882573360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191660011790556108ae565b3360009081526006602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b6108f13385610729565b61090d5760405162461bcd60e51b81526004016103db90611665565b61091984848484611054565b50505050565b61093a33838360405180602001604052806000815250611054565b5050565b6001600160a01b03163b151590565b6001600160a01b0383166109b15760405162461bcd60e51b815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103db565b6001600160a01b038216610a135760405162461bcd60e51b815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103db565b6001600160a01b0383811660008181526008602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b158015610af057600080fd5b505afa158015610b04573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2891906116b1565b90506001600160a01b03811615610ba257604051633ad5cbc160e11b81526001600160a01b038216906375ab978290610b6f908a908a908a908a908a908a906004016116ce565b600060405180830381600087803b158015610b8957600080fd5b505af1158015610b9d573d6000803e3d6000fd5b505050505b50505050505050565b6001600160a01b0383811660009081526008602090815260408083209386168352929052205460001981146109195781811015610c2a5760405162461bcd60e51b815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e6365000060448201526064016103db565b610919848484840361094d565b6001600160a01b03851660009081526020819052604090205483811015610cb05760405162461bcd60e51b815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201526662616c616e636560c81b60648201526084016103db565b6001600160a01b03808716600090815260208190526040808220878503905591871681529081208054869290610ce790849061173e565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987878787604051610d3f93929190611756565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef86604051610d8c91815260200190565b60405180910390a350505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca9060440160206040518083038186803b158015610e1957600080fd5b505afa158015610e2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5191906116b1565b90506001600160a01b03811615610ecd576040516223de2960e01b81526001600160a01b038216906223de2990610e96908b908b908b908b908b908b906004016116ce565b600060405180830381600087803b158015610eb057600080fd5b505af1158015610ec4573d6000803e3d6000fd5b50505050610f67565b8115610f67576001600160a01b0386163b15610f675760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a4016103db565b5050505050505050565b6001600160a01b038616610fd25760405162461bcd60e51b815260206004820152602260248201527f4552433737373a2073656e642066726f6d20746865207a65726f206164647265604482015261737360f01b60648201526084016103db565b6001600160a01b0385166110285760405162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f206164647265737360448201526064016103db565b33611037818888888888610a74565b611045818888888888610c37565b610ba281888888888888610d9d565b6001600160a01b0384166110b55760405162461bcd60e51b815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f206164647265604482015261737360f01b60648201526084016103db565b336110c581866000878787610a74565b6001600160a01b0385166000908152602081905260409020548481101561113a5760405162461bcd60e51b815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c616044820152626e636560e81b60648201526084016103db565b6001600160a01b038616600090815260208190526040812086830390556001805487929061116990849061178b565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516111b793929190611756565b60405180910390a36040518581526000906001600160a01b038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b6020808252825182820181905260009190848201906040850190845b818110156112495783516001600160a01b031683529284019291840191600101611224565b50909695505050505050565b6000815180845260005b8181101561127b5760208185018101518683018201520161125f565b8181111561128d576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006107c46020830184611255565b6001600160a01b03811681146112ca57600080fd5b50565b600080604083850312156112e057600080fd5b82356112eb816112b5565b946020939093013593505050565b60008060006060848603121561130e57600080fd5b8335611319816112b5565b92506020840135611329816112b5565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261136157600080fd5b813567ffffffffffffffff8082111561137c5761137c61133a565b604051601f8301601f19908116603f011681019082821181831017156113a4576113a461133a565b816040528381528660208588010111156113bd57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a086880312156113f557600080fd5b8535611400816112b5565b94506020860135611410816112b5565b935060408601359250606086013567ffffffffffffffff8082111561143457600080fd5b61144089838a01611350565b9350608088013591508082111561145657600080fd5b5061146388828901611350565b9150509295509295909350565b60006020828403121561148257600080fd5b81356107c4816112b5565b6000806000606084860312156114a257600080fd5b83356114ad816112b5565b925060208401359150604084013567ffffffffffffffff8111156114d057600080fd5b6114dc86828701611350565b9150509250925092565b600080604083850312156114f957600080fd5b8235611504816112b5565b91506020830135611514816112b5565b809150509250929050565b6000806000806080858703121561153557600080fd5b8435611540816112b5565b935060208501359250604085013567ffffffffffffffff8082111561156457600080fd5b61157088838901611350565b9350606087013591508082111561158657600080fd5b5061159387828801611350565b91505092959194509250565b600080604083850312156115b257600080fd5b82359150602083013567ffffffffffffffff8111156115d057600080fd5b6115dc85828601611350565b9150509250929050565b600181811c908216806115fa57607f821691505b6020821081141561161b57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526024908201527f4552433737373a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201526b39103337b9103437b63232b960a11b606082015260800190565b6000602082840312156116c357600080fd5b81516107c4816112b5565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c06080820181905260009061170990830185611255565b82810360a084015261171b8185611255565b9998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561175157611751611728565b500190565b83815260606020820152600061176f6060830185611255565b82810360408401526117818185611255565b9695505050505050565b60008282101561179d5761179d611728565b50039056fea2646970667358221220ee7dd3263f2d1df26bc7d07b5a8a95d8e8aa3cde7a01328fe62952ff9b07ab3f64736f6c63430008090033";

export class ERC777PresetFixedSupply__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    defaultOperators: string[],
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC777PresetFixedSupply> {
    return super.deploy(
      name,
      symbol,
      defaultOperators,
      initialSupply,
      owner,
      overrides || {}
    ) as Promise<ERC777PresetFixedSupply>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    defaultOperators: string[],
    initialSupply: BigNumberish,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      defaultOperators,
      initialSupply,
      owner,
      overrides || {}
    );
  }
  attach(address: string): ERC777PresetFixedSupply {
    return super.attach(address) as ERC777PresetFixedSupply;
  }
  connect(signer: Signer): ERC777PresetFixedSupply__factory {
    return super.connect(signer) as ERC777PresetFixedSupply__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC777PresetFixedSupplyInterface {
    return new utils.Interface(_abi) as ERC777PresetFixedSupplyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC777PresetFixedSupply {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC777PresetFixedSupply;
  }
}
