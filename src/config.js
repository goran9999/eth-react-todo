export const TODO_LIST_ADDRESS="0xdA43d5e68a1438539BAC6944Ccf3BF3CA8998480"
export const TODO_LIST_ABI=[
  {
    "constant": true,
    "inputs": [],
    "name": "brojZadataka",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x02f1c680"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "zadaci",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "tekst",
        "type": "string"
      },
      {
        "name": "zavrsen",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xf4f91e78"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tekst",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "zavrsen",
        "type": "bool"
      }
    ],
    "name": "DodajZadatak",
    "type": "event",
    "signature": "0x6bffc338a65ae69728fd8fe92d481553658eac0098e1b20805b7930d4f659376"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "zavrsen",
        "type": "bool"
      }
    ],
    "name": "IzmeniZadatak",
    "type": "event",
    "signature": "0x8d36ea6b3f247a63565b2e5ac2059927efdc602c7eb44322c0ecfb8e3d3b256d"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_tekst",
        "type": "string"
      }
    ],
    "name": "kreirajZadatak",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x507f8669"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "promeniStatusZadatka",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x5bebff5b"
  }
]