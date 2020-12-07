import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Breadcrumb, Button, Icon, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Project from "../../../ethereum/project";
import RequestRow from "../../../components/RequestRow";


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

        // Pull the total number of voters
        const votersCount = await project.methods.votersCount().call();

        return { address, requests, requestCount, votersCount };
    }

    // Implement a helper method to iterate on requests list and
    // create a new row for each request
    createRows() {
        return this.props.requests.map((request, index) => {
            return <RequestRow
                key={index}
                id={index}
                request={request}
                address={this.props.address}
                votersCount={this.props.votersCount}
            />
        });
    }

    render() {

        // Destructuring info for the table tag
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <Breadcrumb>
                    <Breadcrumb.Section>
                        <Link route={`/projects/${this.props.address}`}>
                            <a>
                                Project {this.props.address}
                            </a>
                        </Link>
                    </Breadcrumb.Section>

                    <Breadcrumb.Divider />

                    <Breadcrumb.Section active>
                        Requests
                    </Breadcrumb.Section>
                </Breadcrumb>
                <h3> Request List </h3>
                <Link route={`/projects/${this.props.address}/requests/create`}>
                    <a>
                        <Button color="olive">
                            Create a New Request
                        </Button>
                    </a>
                </Link>

                <Table celled padded selectable color="olive">
                    <Header>
                        <Row>
                            <HeaderCell>
                                Request ID
                            </HeaderCell>

                            <HeaderCell>
                                Description
                            </HeaderCell>

                            <HeaderCell>
                                Value (ETH)
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

                    <Body>
                        {this.createRows()}
                    </Body>
                </Table>
            </Layout>

        )
    }
}

export default RequestIndex;