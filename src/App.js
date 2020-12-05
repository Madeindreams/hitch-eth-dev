import marvin from './marvin.png'

function App() {
  return (
    <div className="App container">
      <header>
      <h1 className="title"> A Hitchhicker's Guide to Ethereum Development </h1>
      <img className="marvin" alt="Marvin" src={marvin} />
        <p>
          
          So, you want to learn solidity and dive into the smart contract world, but you are not sure where to start? Well you are at the right place at the right time. I have decided it is time to have a comprehensive guide to introduce all the newcomers to this thriving blockchain trend. Wheater you are here to create an ERC20 token, some NFTs or even an amitious project such as a DEX or a hot DEFI opportunirty. This is where it all start. And if you do not understand all these new terms, well, keep reading.
        </p>
       <h2 id="my-id">ERC What?</h2>
       <p>
         To make it simple, the Ethereum network runs a big virtual machine where you can store contract and information on the blockchain.
         The Ethereum Virtual Machine. And there are certain standards for everyone to understand eachothers.
         ERC stand for Ethereum Request for Comment and 20 is the proposal. In this guide we will work with 2 of them.
         The ERC20 for our Tokens and the ERC721 for our Non Fungible Token (NFT). That's right we will create both of them in this guide.
       </p>
        <p>
         You got it! The ERC20 is the standard for creating tokens that can be used on the Ethereum network. This guide will cover the ERC20 and ERC721 standard. But before we can create our own tokens or smart contract, we need an environment to work on. This guide will use the Linux environment under windows.
       </p>
       <p>
         It might be a good idea to start from a fresh OS installation. This will prevent some error if you have previous version on your system.
        At this moment, the guide covers Windows and linux envorenments. If you do not wish to perform a fresh Os install,
         you can verify if you have a previous installation on your system before installing dependencies.
       </p>
       <p>
         We have a lot of Ground to cover so let get to it!
       </p>
      </header>

      <div id="toc_container">
       <h3 class="toc_title">Table of Content</h3>
       <ul class="toc_list">
        <li><a href="#WSL">WSL</a></li>
        <li><a href="#NODEJS">NODEJS</a></li>
        <li><a href="#PYTHON2">PYTHON2</a></li>
        <li><a href="#NODE-GYP">NODE-GYP</a></li>
        <li><a href="#GIT">GIT</a></li>
        <li><a href="#GANACHE-CLI">GANACHE-CLI</a></li>
        <li><a href="#TRUFFLE">TRUFFLE</a></li>
        <li><a href="#REACT">REACT</a></li>
        <li><a href="#ANGULAR">ANGULAR</a></li>
        <li><a href="#METAMASK">METAMASK</a></li>
        <li><a href="#INFURA">INFURA</a></li>
        <li><a href="#REDUX">REDUX</a></li>
        <li><a href="#MYSQL">MYSQL</a></li>
        <li><a href="#FTP">FTP</a></li>
        <li><a href="#IPFS">IPSF</a></li>
        <li><a href="#ENS">ENS</a></li>
        <li><a href="#CSS">CSS</a></li>
        <li><a href="#GETH">GETH</a></li>
        <li><a href="#TESTNET">TESTNET</a></li>

      </ul>
      </div>


      <h3 id="WSL">WSL</h3>
      <p>
      You should update your version of Windows to the lastet available.

Since most development is preferably done under linux, we want a linux system on our windows machine. 
To achieve that, we will follow the Microsoft documentation. Make sure to bookmark this because it will become a good reference for our environement setup. 
You will not need to touch your partitions or mess up your master boot record to have Windows Subsystem Linux. We will use linux in a terminal.
</p>
<a href="https://docs.microsoft.com/en-us/windows/dev-environment/overview">MICROSOFT DEVELOPMENT ENVIRONEMENT</a>
<p>
   To install WSL 2, follow these steps.
</p>


<a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">WSL ON WINDOWS 10</a>
<p>
Once completed you should be able to run a linux terminal under windows.
</p>
<li>install the WSL Environement</li>
<li>Install Ubuntu from Microsoft Store</li>
<li>Install Telrminal</li>

<p>
You can play with the new terminal setings to change colors and background.
</p>


<h3 id="NODEJS">NODEJS</h3>
      <p>
      We will need NodeJS and nvm. Nvm let us manage which version of NodeJS we want to run. 
      Start a linux ubuntu terminal and type the folowwing command;
      </p>


     <span className="command">Sudo apt-get update</span>
     <span className="command">sudo apt-get install curl</span>
     <span className="command">curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash</span>
     <span className="command">nvm install 12.19.0</span>

      <p>
      You have just installed NodeJS version 12.19.0. To find out more about NodeJS visit. To test your installation type in;
      </p>

      <span className="command">node -v</span>

      <p>If sucessfull, you should see the version of node running. 
        To read more about NodeJS visit :</p>


      <a href="https://docs.microsoft.com/en-us/windows/nodejs/ https://nodejs.org/en/docs/">NodeJS</a>

      <p>
      To see which version of node are installed on your system.
      </p>

      <span className="command">nvm list</span>

      <p>
      To change version currently in use.
      </p>

      <span className="command">nvm use 12.19.0</span>
      <p>
      will install a specific version.
      </p>

      <span className="command">nvm install 10.17.0</span>

<p>You now have NodeJS installed on your system.</p>


    </div>
  );
}

export default App;
