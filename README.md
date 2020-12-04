# A Hitchhiker's Guide to Ethereum Development

So, you want to learn solidity and dive into the smart contract world, but you are not sure where to start?
Well you are at the right place at the right time. I have decided it is time to have a comprehensive guide to introduce all the newcomers to this thriving blockchain trend. Wheater you are here to create an ERC20 token, some NFTs or even an amitious project such as a DEX or a hot DEFI opportunirty. This is where it all start. And if you do not understand all these new terms, well, keep reading.

## ERC what?

To make it simple, the Ethereum network runs a big virtual machine where you can store contract and information on thje blockchain. The Ethereum Virtual Machine. And there are certain standards for everyone to understand eachothers. ERC stand for Ethereum Request for Comment and 20 is the proposal.

You got it! The ERC20 is the standard for creating tokens that can be used on the Ethereum network. This guide will cover the ERC20 and ERC721 standard. But before we can create our own tokens or smart contract, we need an environment to work on. This guide will use the Linux environment under windows.

It might be a good idea to start from a fresh OS installation if you’re not familiar with Linux command.
This will also prevent some error if you have previous version on your system.


## Table of Contents

- [WSL](#WSL)
- [NODEJS](#NODEJS)
- [NPM](#NPM)
- [PYTHON2](#PYTHON2)
- [NODE-GYP](#NODE-GYP)
- [GIT](#GIT) 
- [GANACHE-CLI](#GANACHE-CLI) 
- [TRUFFLE](#TRUFFLE) 
- [REACT](#REACT) 
- [ANGULAR](#ANGULAR) 
- [METAMASK](#METAMASK) 
- [INFURA](#INFURA) 
- [REDUX](#REDUX) 
- [MYSQL](#MYSQL) 
- [FTP](#FTP) 
- [IPFS](#IPFS) 
- [ENS](#ENS) 
- [CSS](#CSS) 
- [GETH](#GETH) 
- [TESTNET](#TESTNET) 



### WSL

You should update your version of Windows to 

Since most development is preferably done under linux, we want a linux system on our windows machine. To achieve that, we will follow the Microsoft documentation. Make sure to bookmark this because it will become a good reference for our environement setup. You will not need to touch your partitions or mess up your master boot record to have **Windows Subsystem Linux**

https://docs.microsoft.com/en-us/windows/dev-environment/overview

To install WSL 2, follow these steps.

https://docs.microsoft.com/en-us/windows/wsl/install-win10

Once completed you should be able to run a linux terminal under windows.

- install the WSL Environement
- Install Ubuntu from Microsoft Store
- Install Telrminal

:collision: You can play with the new terminal setings to change colors and background.

### NODEJS

We will need NodeJS and nvm. Nvm let us manage which version of NodeJS we want to run. Start a linux ubuntu terminal and type the folowwing command;

```Sudo apt-get update```

```sudo apt-get install curl```

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash```

```nvm install 12.19.0```

You have just installed NodeJS version 12.19.0. To find out more about NodeJS visit.
To test your installation type in;

``` node -v```

> 

If sucessfull, you should see the version of node running

https://docs.microsoft.com/en-us/windows/nodejs/
https://nodejs.org/en/docs/

To see which version of node are installed on your system.

``` nvm list```

To change version currently in use.

``` nvm use 12.19.0 ```

will switch to the specified version.

```nvm install 10.17.0```

will install the specified version

### NPM

With node came NPM Node Package Manager, a tool to let you add package to your project. You can verify its installation with the command;

``` npm -v ```

### PYTHON2

We will need to install python2. To find out more about python you can visit.

https://docs.microsoft.com/en-us/windows/python/
https://www.python.org/download/releases/2.0/

To install python2 type the following command in the linux terminal

```Sudo apt-get update```

```sudo apt install python2```

To verify it's installation. 

``` python2 -V ```

### NODE-GYP

Now will install a node package called node-gyp, to learn more about it visit.

https://www.npmjs.com/package/node-gyp

To install a node package, we use npm. To install a package globaly we use the flag -g or --global
This command will install the node package node-gy globally.

``` npm install --save-dev -g node-gy ```

Verify the installation with the command

``` noge-gyp -v ```

Note: package.json files are node packages information. When cloning a git repo to your computer you generally ```run npm install``` to install all de dependencies for the project.

### GANACHE-CLI

To develop on the blockchain we need a blockchain. The truffle suite is very usefull for that. We will install Truffle and Ganache on our system. This will provide us with a blockchain to recors data and a node to deploy our contract.

To read more on these tools.

https://www.trufflesuite.com/
https://github.com/trufflesuite/ganache-cli

We will also install Ganache globally with the command.

```npm install --save-dev -g ganache-cli```

``` npm install --save-dev -g truffle@latest ```

This take care of our local blockchain.

### GIT

If you do not have a Github account yet you should create one

https://github.com

Git will allow you to save your code online and manage the versions of you Dapp. Install it on your system with the command.

```sudo apt install git-all```

Check the version and confirm installation.

``` git --version ```

### REACT

To make some cool apps we will use react. To install it type the command.

 ``` npm install --save-dev  -g create-react-app ```

### METAMASK

- MetaMask, https://metamask.io/

Metamask is an Ethereum Wallet integrated to a desktop browser as an extention or a Mobile app on Mobile Device.

### INFURA

- Infura, https://infura.io/

Infura offers a free Ethereum Node connection services. We can use it to deploy our contract

### REDUX

- Redux Devtools, https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd







Creating our first react app. First let us pick a folder to save our work. In my case I will use the folder code.

``` cd code ```

Now you will clone this repository.

in the terminal type.

``` git clone https://github.com/Madeindreams/hitch-eth-dev.git```

``` cd hitch-eth-dev ```

You will now be inside the project folder. you can type in the command 

``` code . ```

This will launch VSC in you project folder.

Look at the package.json file. It contains all the rest of the dependecies we need to develop our app. To install all the package listed type in termina, in project folder.

``` npm install ```

This will installed all the required package to start the development of your Dapp that are listed in package.json.

Here is a few of them.

- **web3**,  https://www.npmjs.com/package/web3

- **@openzeppelin/contracts**, https://www.npmjs.com/package/@openzeppelin/contracts

Now it's time to initiate the truffle project. IF you did not clone the repo ans are starting from scratch.

``` truffle init```

Start Ganache with the following command

``` ganache-cli --networkId 4777 ```

We specify the network id that should match the network is in truffle-config.js

Run the command 

``` truffle migrate ```

This will deploy your contract on your local blockchain. Yes, i know you this is gong fast. Let take a moment to observer what we did, if you cloned this repository. Then you have a contract called Token.sol in the src/contracts folder. This is an ERC20 contract that is using openZepplein contract. Why use some openZeppelin contract. Symply because we just bumped our nove contract to a higher standard security. OpenZepplelin ar auditing smart contract. So, by using there we kind of audit our contract to a minimum.

To learn more about openZeppelin;

https://openzeppelin.com/

Yes, you now have an ERC20 token that is deployed on your local blockchain. Let's connect your metamask wallet to thatr local blockchain. To do so, come back to the terminal where you started Ganache-cli. It printed out some adresses an private Key.

We are interested in the first private key.

> 0xceb161fb15db566c685c127e6f9efa2b4285f11633a837ec5767e5ec6249a3c6

In Metamask select the network and select the custom PRC option.

Add the Ganache cli RPC. or select localhost 8545. To view or change the Ganache connection setting you can view the truffle-config.js file.

Once you are conected to the right network import the wallet by providing the private key from ganache-cli.
Remove the leading 0x and paste the rest in. You should have just under 100 ETH on this account since we spent some when we deployed the Token.sol.

Now it's time to launch the app. in the terminal, under your project directory, type 

``` npm start ```

This will start your app and the browser should automatically display the application.

NOTE: You should work from the files in your linux file system and not the windows one.

If your path looks like;

> /mnt/d/code

You are on a Windows mounted Linux partitions.

> /code/

You are in a Linux system.

From your windows desktop you can access you linux filesystem here;

> \\\wsl$\home\user\code\

### Visual Studio Code

- **Visual Studio Code**, https://code.visualstudio.com/docs

To help you with language markup you can add extension to VSC

You should add the following extensions

- solidity by Juan Blanco
- env

You are almost ready to start coding.

Visual studio will often warn you about coding error. If you see visual studio complaining about the solidity version. In a .sol file. Right click the document and select change solidity version.

You should select the one declared in the first line of your contract .sol file.

> pragma solidity 0.6.2;

Note that this version must match the one in truffle-config.js as well.

To read more about Solidity version.

https://docs.soliditylang.org/en/v0.7.5/


### MYSQL

- **MySQL**, https://dev.mysql.com/

