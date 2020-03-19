import Web3 from 'web3';
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !=='undefined') {
    //in browser and meta is running

    web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on server or user not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/9bf8842ccc2c40ad8686e700e0233caf'
    );
    web3 = new Web3(provider);
}

export default web3;