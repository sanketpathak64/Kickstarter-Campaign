import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x654644e079F4ACe576541276CF7E63148d5A3Cb0'
);
export default instance;