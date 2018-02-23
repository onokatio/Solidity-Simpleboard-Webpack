
window.addEventListener('load', function () {
  if (typeof window.web3 !== 'undefined') {
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    console.log('Now using localhost:8545')
    var Web3 = require('web3')
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  }

  // Now you can start your app & access web3 freely:
  startApp()
})

function startApp () {
  // var coinbase = window.web3.eth.coinbase;
  // var balance = window.web3.eth.getBalance(coinbase);

  // console.log(balance.plus(21).toString(10));
  window.web3.eth.defaultAccount = window.web3.eth.coinbase
  // const SimpleBoard = web3.eth.contract(SimpleBoardABI);
  // const instance = SimpleBoard.at('0x7f4efae3edcc01091ab8aab42bbd0d5ae77fb8ee');
  var contract = require('truffle-contract')
  const json = require('./build/contracts/SimpleBoard.json')
  var SimpleBoard = contract(json)
  var board = SimpleBoard.deployed()
  // const address = '0xcec951596211722cdd30c38e2fb963d7de534264'
  // const instance = board.at(address)

  // instance._eth.defaultAccount = instance._eth.accounts[0];
  // var result = instance.getResponsesAmount();
  var ResponsesAmount = board.getResponsesAmount().toNumber()

  console.log('Web3 version: ' + window.web3.version.api)
  console.log('Contract Address: ' + board.address)
  console.log('ResponsesAmount: ' + ResponsesAmount.s)
  console.log(ResponsesAmount)

  for (var i = 0; i < ResponsesAmount; i++) {
    console.log('============================================================')
    console.log((i + 1) + ':' + board.getResponseOwner(i))
    console.log(board.getResponseStr(i))
  }

  // instance.postRes("hello");
  window.board = board
}
