# A Hitchhiker's Guide to Ethereum Development

So, you want to learn solidity and dive into the smart contract world, but you are not sure where to start?
Well you are at the right place at the right time. I have decided it is time to have a comprehensive guide the
introduce all the newcomers to this thriving blockchain trend. Wheater you are here to create an ERC20 token, some NFTs or even an amitious project such as a DEX or a hot DEFI opportunirty. This is where it all start. And if you do not understand all these new terms, well, keep reading.

## ERC what?

To make it simple, the Ethereum network runs a big virtual machine where you can store contract and information on thje blockchain. The Ethereum Virtual Machine. And there are certain standards for everyone to understand eachothers. ERC stand for Ethereum Request for Comment and 20 is the proposal.

You got it! The ERC20 is the standard for creating tokens that can be used on the Ethereum network. This guide will cover the ERC20 and ERC721 standard. But before we can create our own tokens or smart contract, we need an environment to work on. This guide will use the Linux environement under windows.

It might be a good idea to start from a fresh OS installation if you’re not familiar with Linux command.
This will also prevent some error if you have previous version on your system.



## Dependencies installation

- WSL
- UBUNTU
- NVM & NodeJS
- Python2
- Git
- ganachge
- Truffle
- React
- Mysql

### WSL  Windows SubSystem Linux

Since most development preferably done under linux, We want a linux sys on our windows machine. To achieve that wi will follows the microsoft documentation. Make sure to bookmark this because it will become a good reference for our environement setup.

https://docs.microsoft.com/en-us/windows/dev-environment/overview

To install WSL 2, follow these step;

https://docs.microsoft.com/en-us/windows/wsl/install-win10

Once completed you should be able to run a linux terminal under windows.

### Node JS and NVM

We will need NodeJS and nvm. Nvm let us manage which version of NodeJS we want to run. Start a linux ubuntu terminal and type the folowwing command;

```Sudo apt-get update```

```sudo apt-get install curl```

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash```

```nvm install 12.19.0```


You have just installed NodeJS version 12.19.0. To find out more about NodeJS visit;
To test you installation type in;

``` node -v```

If sucessfull, you should see the version of node running

https://docs.microsoft.com/en-us/windows/nodejs/
https://nodejs.org/en/docs/

To see which version of node are installed on your system;

``` nvm list```

To change version currently in use;

``` nvm use 12.19.0 ```

will switch to the specified version.

```nvm install 9.10.0```

will install the specified version

### NPM

With node came NPM Node Package Manager, a tool to let you add package to your project. You can verify it's installation with the command;

``` npm -v ```

### PYTHON2

We will need to install python2. To find out more about python you can visit;

https://docs.microsoft.com/en-us/windows/python/
https://www.python.org/download/releases/2.0/

To install python2 type the following command in the linux terminal

```Sudo apt-get update```

```sudo apt install python2```

To verify it's installation; 

``` python2 -V ```

### NODE-GYP

Now will install a node package called node-gyp, to learn more about it visit;

https://www.npmjs.com/package/node-gyp

To install a node package we use npm. To install a package globaly we use the flag -g or --global
This command will install the node package node-gy globally.

``` npm install --save-dev -g node-gy ```

Verify the installation with the command

``` noge-gyp -v ```

Note: package.json files are node packages information. When cloning a git repo to your computer you generally ```run npm install``` to install all de dependencies for the project.


### GANACHE-CLI

To develop on the blockchain we need a blockchain. The truffle suite is very usefull for that. We will install Truffle and Ganache on our system. This will provide us with a blockchain to recors data and a node to deploy our contract.

To read more on these tools;

https://www.trufflesuite.com/
https://github.com/trufflesuite/ganache-cli

We will also install Ganache globally with the command;

```npm install --save-dev -g ganache-cli```


``` npm install --save-dev -g truffle@latest ```

This take care of our local blockchain.

### GIT

If you don't have a github account yet you should create one

https://github.com

Git will allow you to save your code online and manage the versions of you Dapp. Install it on your system with the command;

```sudo apt install git-all```

Check the version and confirm installation;

``` git --version ```

### REACT

To make some cool apps we will use react. To install it type the command;

 ``` npm install --save-dev  -g create-react-app ```

## Other tools you will need

- Browser, https://brave.com/fr/
- MetaMask, https://metamask.io/
- Redux Devtools, https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
- Visual Studio Code, https://code.visualstudio.com/docs
- Infura, https://infura.io/


## Your Environment is ready, What now?

Let's create our first react app. First let's pick a folder to savoe our work. In my case i will use the folder code.

``` cd code ```

Now you will clone this repository.

in the terminal type;

``` git clone https://github.com/Madeindreams/hitch-eth-dev.git```


``` cd hitch-eth-dev ```

You will now be inside the project folder. you can type in the command 

``` code . ```

This will launch VSC in you project folder.

Take a look at the package.json file. It containe all the rest of the dependecies we need to develop outr app. To install all the package listed type in;

``` npm install ```

This will installed all the required package to start the development of your Dapp.

Now it's time to initiate the truffle project. IF you did not clone the repo ans are starting from scratch.

``` truffle init```


Start Ganache with the following command

``` ganache-cli --networkId 4777 ```

We specify the network id that should match the network is in truffle-config.js


Run the command 

``` truffle migrate ```

This will deploy your contract on your local blockchain. Yes i know you this is gong fast. Let take a moment to observer what we did, If you cloned the this repository. Then you have a contract called Token.sol in the src/contracts folder. This is an ERC20 contract that is using openZepplein contract. Why use some openZeppelin contract. Symply because we just bumped our nove contract to a higher standard security. OpenZepplelin ar auditing smart contract. So by using there we kinda audit our contract to a minimum.

To learn more about openZeppelin;

https://openzeppelin.com/

Yes you now have an ERC20 token that is deployed on your local blockchain. Let's connect your metamask wallet to thatr local blockchain. To do so, come back to the terminal where you started Ganache-cli. It printed out some adresses an private Key.

We are interested in the first private key;

> 0xceb161fb15db566c685c127e6f9efa2b4285f11633a837ec5767e5ec6249a3c6

In metamask select the network and select the custom PRC option.

Add the Ganache cli RPC. or select localhost 8545. To view or change the Ganache connection setting you can veie the truffle-config.js file.

Once you are conected to the right network import the wallet by providing the private key from ganache-cli.
Remove the leading 0x and paste the rest in. You should have just under 100 ETH on this account since we spent some when we deployed the Token.sol.


