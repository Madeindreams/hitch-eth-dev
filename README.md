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


When working with WSL. The terminal will strat in a mounted windows folder. Working from the windows file system will cause performance and access permission issue. To avoid that you should alway work within the linux file system. So start a ubuntu terminal and type 

```cd```

```mkdir code```

```cd code```

You are now in the code folder, on the linux file system. this is where all your project will be saved. This is also the folder you want to be in when cloning from github. Clone repos will automatically create a folder name after the project name.


### NODEJS

We will need NodeJS and nvm. Nvm let us manage which version of NodeJS we want to run. Start a linux ubuntu terminal and type the folowwing command;

```Sudo apt-get update```

```sudo apt-get install curl```

```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash```

```nvm install 12.19.0```

You have just installed NodeJS version 12.19.0. To find out more about NodeJS visit.
To test your installation type in;

``` node -v```
 

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

When starting a new project, you can use this coomand to create the package.json file that wil contain all the dependencies required for your project.

```npm init```

You can press enter when prompted to keep the default value.
Everytime you will add a npm package to your project with the ```npm install a-package-name``` command, it will insert this package in the package.json file. This way, anyone that use your project can just type ```npm install``` and npm will install everything that is listed in your package.json

When installing a package you might see warnings like what some package are deprecated, this wont prevent your project to work. 

You might also see some vulnerabilitys, You should investigate them to be aware of the risk they represent.

You sould install all the package for your project under the same node version. Often, when you will open a terminal, nvm will use the latest node version. For this project we will use 10.17.0. So before you install any package make sure you are under the right node version as it might cause errors.

You can find more about npm here

https://www.npmjs.com/

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

To install a node package, we use npm. To install a package globaly we use the flag ```-g``` or ```--global```

This command will install the node package node-gy globally.

``` npm install --save-dev -g node-gy ```

Verify the installation with the command

``` noge-gyp -v ```

Note: package.json files are node packages informations. When cloning a git repo to your computer you generally ```run npm install``` to install all de dependencies for the project.

### GANACHE-CLI

To develop on the blockchain we need a blockchain. The truffle suite is very usefull for that. We will install Truffle and Ganache on our system. This will provide us with a blockchain to recors data and a node to deploy our contract.

To read more on these tools.

https://www.trufflesuite.com/
https://github.com/trufflesuite/ganache-cli

We will also install Ganache globally with the command.

```npm install --save-dev -g ganache-cli```

``` npm install --save-dev -g truffle@latest ```

This take care of our local blockchain.

We use the command line version since we are working from a linux terminal. We will also use ganache-cli to fork the main network later on.

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

Infura offers a free Ethereum Node connection service. We can use it to deploy our contract or query the ethereum network. You will need to create an account to obtain an KEY.

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

user should be your username under linux. It's usualy what you see in the linux promt

```username@yourPc:```


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

### CSS

- CSS, https://www.w3schools.com/css/default.asp

CSS stand for Cascading Style Sheets. The extension of the files is .css. This markup will alow you to customize html elements in your documents. 

You can use inline css styling (not recommended)

```html
 <h1 style="color:#000000;"> the black text </h1>
```

A better appraoch, is to store all your CSS in one place 

index.css

```css
/* This is how you comment css */
/* This css will apply to the body element */
body {
    background-color: #282c34;
}


/* This css will apply to the header HTML5 element*/
header {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: white;
  margin: 10px;
  padding:10px;
}

/* All paragraph will be justified */
p {
  text-align: justify;
}

/* Classes are represented with a . in front of the name */
.title{
  color:#4e535c;
}


/* Element id are represented with a # in front of the name */
#my-h2-id{
    text-decoration: underline;
}


 ```

 Now if we use the previous `<span>` element and apply all the style to it like this.


```html 
<header>
<h1 class= "title"> A Hitchhicker's Guide to Ethereum Development </h1>

<p> justified parapgraph ... </p>

<h2 id = "my-h2-id"> ERC What?</h2>
</header>
```

In order for your html document to apply the style you will need to import your CSS files.
Our React app is loading from the index.html file. We could link a CSS file by adding the following line int the head of ourhtml document.

```html 
<head>
  <link rel="stylesheet" href="index.css">
</head>

```

However in this case since we use React we will import the CSS for our components with the import statement in the index.js default component.

```javascript 

import './index.css';

```


- [CSS Color picker](https://www.google.com/search?q=css+color+picker&oq=css+color+picker&aqs=chrome..69i57.3167j0j4&sourceid=chrome&ie=UTF-8)




### GETH

To work with the Ethereum environment you will need acces to the Ethereum network. There are a few way to do it depending on your project,


Web3 is a npm package that will let your app intereact with the network. But it need a provider. A provider is an acces point to a node.

In a react app we could use metamask as a provider. It will be directly injected in your app.

We could also use a public node like Infura. You can request an access to the node for your app. This is a very common way.

But you could also install a Go Ethereum node (GETH). A real node that you can use to send transactions, deploy contract, and test your applications. However, you will need very good read and write access speed. At the time of writing, the blockchain size is about 277 GB and you will require a Nvme Drive to keep up with synchronization.

Not only that but it will take anywhere between 18 to 48+ hours to sync your node.

You might ask yourself why give yourself all this trouble. First it will give you an edge, Instead of using a public service where a lot of transaction get sent. You have direct acces to the network. It will also be usefull to test complex operation with other contract on the main network that might not have been all deployed to the same testnet. Forking a node with ganache-cli over Infura is not very stable and you will most likely have to reconnect to it often. This can be challenging. 

So if you choose to install a Geth node you can follow these step.

The instllation documentation

https://geth.ethereum.org/docs/install-and-build/installing-geth#install-on-ubuntu-via-ppas


I strongly suggest that you follow the step for the Ubuntu installation since our environement is based on it. Head to your Ubuntu terminal and type:

```sudo add-apt-repository -y ppa:ethereum/ethereum```

```sudo apt-get update```

```sudo apt-get install ethereum```

Once installed type in the command to start geth;


```geth --rpc --rpcapi "personal,eth,web3,net" --ipcpath "geth.ipc" --rpccorsdomain * ``` 

Your node will start, It might take a while before it finds some peers to connect to and start downloading the blockchain. It will download for a while.

To see the status of the syncronization, you can open a new terminal and type ;

 ```geth attach``` 

 It will strat a geth console, enter the comand;

 ```eth.syncing```

 This will show you the status of your node. If the output is false, it mean that you are cync to the main net. 

 **Always use CTRL-C to close the geth console process !**
