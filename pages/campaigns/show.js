import React, {Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';


class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        
        return {
            address: props.query.address,
            minimnumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };

    }

    renderCards() {
        const {
            balance,
            manager,
            minimnumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: "Address of manager",
                description:"manager created this campaign and can create request to withdraw money",
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minimnumContribution,
                meta: "Minimum Contribution(wei)",
                description:"you must contribute at least min wei to become contributor"
            },
            {
                header: requestsCount,
                meta: "number of requests",
                description: "A request tries to withdraw a money from the contract. Request must be approved by approvers"
            },
            {
                header: approversCount,
                meta : "Number of approvers",
                description: "number of people who have already donated to this campaign"
            },
            {
                header: web3.utils.fromWei(balance,'ether'),
                meta: "campaign balance(ether)",
                description: "how much money campaign has left to spend"
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
            <h3>CampaignShow</h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                        
                    </Grid.Column>
                    
                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                        </Link>
                        </ Grid.Column>
                </Grid.Row>
            </Grid>
            
            
            </Layout>
            );
    }
}

export default CampaignShow;