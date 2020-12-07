import React, { Component } from "react";
import { Form, Input, Message, Button, Icon } from "semantic-ui-react";
import { Router } from "../routes";
import Project from "../ethereum/project";
import web3 from "../ethereum/web3";

class ContributionForm extends Component {

    // Define the state
    state = {
        value: "",
        errorMessage: "",
        loading: false
    }

    // Create the onSubmit function
    onSubmit = async (event) => {
        // Prevent the form to attempt to submit itself
        event.preventDefault();

        // Retrieve the project address and access it
        const project = Project(this.props.address);

        // Turn the loading wheel on
        this.setState({ loading: true })

        // Implement an Error Handler
        try {
            // Get a list of accounts from web3
            const accounts = await web3.eth.getAccounts();

            // Access the contribute method to make a transaction
            await project.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, "ether")
            })

            // Refresh the page to update information once the
            // transaction is done.
            Router.replaceRoute(`/projects/${this.props.address}`)
        } catch (err) {
            // Set the errors to the errorMessage
            this.setState({ errorMessage: err.message });
        }

        // Turn the loading wheel off and reset the form
        this.setState({ loading: false, value: "" })

    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>
                        Contribution Amount
                        <Input
                            label="ETH"
                            labelPosition="right"
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                    </label>
                </Form.Field>

                <Message error header="Oh no!" content={this.state.errorMessage} />
                <Button color="olive" icon loading={this.state.loading}>
                    <Icon name="angle double right" />
                    Contribute!
                </Button>
            </Form>
        )
    }
}

export default ContributionForm;