import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button, Icon, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Project from "../../../ethereum/project";


class RequestIndex extends Component {

    // Define a function to get the project address and pass it as props
    static async getInitialProps(props) {
        const { address } = props.query;

        // Fetch the Project instance
        const project = Project(address);

        // Call getRequestCount and fetch information from it
        const requestCount = await project.methods.getRequestsCount().call();

        // Create an array of ints with the requests to be desplayed on screen
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, index) => {
                return project.methods.requests(index).call();
            })
        );

        return { address, requests, requestCount };
    }

    render() {

        // Destructuring info for the table tag
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <Link route={`/projects/${this.props.address}`}>
                    <a>
                        <Button
                            secondary
                            icon
                            labelPosition="left"
                        >
                            <Icon name="arrow alternate circle left outline" />
                            Project Page
                        </Button>
                    </a>
                </Link>
                <h3> Request List </h3>
                <Link route={`/projects/${this.props.address}/requests/create`}>
                    <a>
                        <Button color="olive">
                            Create a New Request
                        </Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>
                                Request ID
                            </HeaderCell>

                            <HeaderCell>
                                Description
                            </HeaderCell>

                            <HeaderCell>
                                Value
                            </HeaderCell>

                            <HeaderCell>
                                Recipient
                            </HeaderCell>

                            <HeaderCell>
                                Vote Count
                            </HeaderCell>

                            <HeaderCell>
                                Approve
                            </HeaderCell>

                            <HeaderCell>
                                Finalize
                            </HeaderCell>
                        </Row>
                    </Header>
                </Table>
            </Layout>

        )
    }
}

export default RequestIndex;