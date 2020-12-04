
require('dotenv').config()
const { default: Web3 } = require("web3");

const Token = artifacts.require("Token");

module.exports = async function(deployer) {
    
    const accounts = await web3.eth.getAccounts();
    await deployer.deploy(Token);
}