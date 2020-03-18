import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8326cF73e83A5029bcCE20C569B02c107409D5EC'
);
export default instance;