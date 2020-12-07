import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Project from "../ethereum/project"


class RequestRow extends Component {

    // Define an onApprove helper function
    onApprove = async () => {
        const project = Project(this.props.address)

        // Get a list with all the accounts
        const accounts = await web3.eth.getAccounts();

        // Reach to approveRequests and confirm the vote.
        await project.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        });
    }

    // Define an onCompletion helper function
    onCompletion = async () => {
        const project = Project(this.props.address);

        // Get a list with all the accounts
        const accounts = await web3.eth.getAccounts();

        // Reach the completeRequest function
        await project.methods.completeRequest(this.props.id).send({
            from: accounts[0]
        });
    };

    render() {

        // Destructure the Table into Row and Cell
        const { Row, Cell } = Table;

        // Destructure the props
        const { id, request, votersCount } = this.props

        return (
            <Row>
                <Cell>
                    {id + 1}
                </Cell>

                <Cell>
                    {request.description}
                </Cell>

                <Cell>
                    {web3.utils.fromWei(request.value, "ether")}
                </Cell>

                <Cell>
                    {request.recipient}
                </Cell>

                <Cell>
                    {request.confirmationCount} / {votersCount}
                </Cell>

                <Cell>
                    <Button color="olive" onClick={this.onApprove}>
                        Approve
                    </Button>
                </Cell>

                <Cell>
                    <Button color="black" onClick={this.onCompletion}>
                        Finalize
                    </Button>
                </Cell>
            </Row>
        )
    }
}

export default RequestRow;