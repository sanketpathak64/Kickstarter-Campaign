const HDWalletProvider = require( 'truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'enlist seven lava rough burger maze trumpet series cream equip top state',
    'https://rinkeby.infura.io/v3/9bf8842ccc2c40ad8686e700e0233caf'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("attempting to deploy from acc",accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });
    
    console.log("contract deployed to",result.options.address);
    };
deploy();

// ttempting to deploy from acc 0x0bfDAd5d6268600c8E6fa8ffCB843AC7dc04CB58
// contract deployed to 0x8326cF73e83A5029bcCE20C569B02c107409D5EC