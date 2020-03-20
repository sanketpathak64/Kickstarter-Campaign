import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3BCa18CdC5dC06B26A8841bA7eEfB6e0d82C158f'
);
export default instance;