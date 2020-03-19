//npm run dev
import React,{Component} from 'react';
import factory from '../ethereum/factory';
import {Card,Button} from 'semantic-ui-react';
import Layout from '../components/Layout';

class CampaignIndex extends Component{
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
           return {
            header: address,
            description: <a> View Campaign</a>,
            fluid: true
           } ;
        });

        return <Card.Group items={items} />;
    }

    render() {
       

        return (
        <Layout><div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" /> 
        
        <h3>Open Campaign</h3>
        {this.renderCampaigns()}
        <Button 
            content="Create Campaign"
            icon="add circle" //add also
            primary // primary={true}
        />

        </div>
        </Layout>);
    }
}

export default CampaignIndex;