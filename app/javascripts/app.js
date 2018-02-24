window.addEventListener('load', function () {
  var Web3 = require('web3')
  var web3
  if (typeof window.web3 !== 'undefined') {
    console.log('Now using MetaMask')
    web3 = new Web3(window.web3.currentProvider)
  } else {
    console.log('No web3 ? You should consider trying MetaMask!')
    console.log('Now using http://127.0.0.1:8545')
    web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
  }

  console.log('Web3 version: ' + web3.version)

  // web3.eth.defaultAccount = window.web3.eth.coinbase
  // web3.eth.coinbase = window.web3.eth.coinbase
  // window.myweb3 = web3
  startApp(web3)
})

function startApp (web3) {
  // var coinbase = window.web3.eth.coinbase;
  // var balance = window.web3.eth.getBalance(coinbase);

  // console.log(balance.plus(21).toString(10));
  var contract = require('truffle-contract')
  const json = require('../../build/contracts/SimpleBoard.json')
  window.json = json
  var SimpleBoard = contract(json)
  SimpleBoard.setProvider(web3.currentProvider)
  SimpleBoard.defaults(web3.eth.accounts[0])
  window.SimpleBoard = SimpleBoard
  var board
  // var boardPromise = SimpleBoard.deployed()
  // boardPromise.then(function (instance) {

  SimpleBoard.deployed().then(function (instance) {
    board = instance
    return board.getResponsesAmount()
  }).then(function (responsesAmount) {
    console.log('response amount: ' + responsesAmount)
    // return board.getAllResponses()
  }).then(function (allRes) {
    window.allRes = allRes
  })
  // var instance = web3.eth.contract(json.abi)
  // board = instance.at(json.address)
  // window.board = board
  // board.postRes('hello')
  /*
    .then(function (instance) {
    board = instance
    console.log('Contract Address: ' + board.address)
    return board.postRes('hello')
  }).then(function (result) {
    return board.getResponsesAmount().toNumber()
  }).then(function (resnum) {
    console.log('ResponsesAmount: ' + resnum.s)
    for (var i = 0; i < resnum; i++) {
      // console.log('============================================================')
      // console.log((i + 1) + ':' + .getResponseOwner(i))
      // console.log(board.getResponseStr(i))
    }
  })
  */
  // const address = '0xcec951596211722cdd30c38e2fb963d7de534264'
  // const instance = board.at(address)

  // instance._eth.defaultAccount = instance._eth.accounts[0];
  // var result = instance.getResponsesAmount();
  // var ResponsesAmount = board.getResponsesAmount().toNumber()
}
window.send = function () {
  window.SimpleBoard.deployed().then(function (instance) {
    return instance.postRes('hello world', { from: window.web3.eth.coinbase })
  })
}
