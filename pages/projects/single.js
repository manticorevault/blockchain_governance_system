import React, { Component } from "react";
import { Card, Icon, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/Layout";
import ContributionForm from "../../components/ContributionForm";
import Project from "../../ethereum/project";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";

class ProjectSingle extends Component {

    // Fetch information and return it as an object to be
    // captured by the props
    static async getInitialProps(props) {
        // Access the project's address
        const project = Project(props.query.address)

        // Retrieve information from the contract
        const info = await project.methods.getInfo().call();

        // Translate the info object and return as individual props
        return {
            address: props.query.address,
            minimumAmount: info[0],
            balance: info[1],
            requestsCount: info[2],
            votersCount: info[3],
            managerAddress: info[4]
        };
    }

    // Create a method to render the Cards
    renderCards() {

        // Destructure the information into props
        const {
            address,
            balance,
            managerAddress,
            minimumAmount,
            requestsCount,
            votersCount
        } = this.props;

        // Create an array of objects with the info needed
        const items = [
            {
                header: this.props.address,
                meta: "Project's Address",
                description: "This project's full address. Be sure you're connected to the right project",
                // Add the style property for custom styles
                style: { overflowWrap: "break-word" }
            },
            {
                header: managerAddress,
                meta: "Manager Address",
                description: "This is the address of the project manager. They can create governance requests to be voted by the users.",
                // Add the style property for custom styles
                style: { overflowWrap: "break-word" }
            },
            {
                header: minimumAmount,
                meta: "Minium Amount",
                description: "Minimum amount one need to contribute in order to participate in the governance decisions"
            },
            {
                header: requestsCount,
                meta: "Number of Requests",
                description: "Number of governance decisions in this project"
            },
            {
                header: votersCount,
                meta: "Number of Voters",
                description: "Amount of voters currently related to this project"
            },
            {
                // Convert the balance to ETH
                header: web3.utils.fromWei(balance, "ether"),
                meta: "Project Balance in ETH",
                description: "How much ETH is currently related to this project"
            }
        ]

        return <Card.Group itemsPerRow={1} centered={true} items={items} />

    }


    render() {
        return (
            <Layout>
                <h3> Project {this.props.address} </h3>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>

                            {this.renderCards()}

                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributionForm address={this.props.address} />
                            <Link route={`/projects/${this.props.address}/requests`}>
                                <a>
                                    <Button secondary icon style={{ marginTop: "15px" }}>
                                        View All Requests
                                    <Icon name="clipboard check" />
                                    </Button>
                                </a>
                            </Link>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Layout >
        )
    }
}

export default ProjectSingle;