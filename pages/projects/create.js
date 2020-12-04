import React, { Component } from "react";
import { Form, Input, Button, Message } from "semantic-ui-react"
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory"
import web3 from "../../ethereum/web3";

class ProjectCreate extends Component {

    // Prepare the state on load
    state = {
        miniumAmount: "",
        errorMessage: ""
    };

    // Define the event handler component for submitting the form
    onSubmit = async (event) => {
        // Prevent default form behavior
        event.preventDefault();

        // Add an error handler
        try {
            // Retrieve the list of accounts
            const accounts = await web3.eth.getAccounts();

            // Call the factory smart contract
            await factory
                .methods
                .createProject(this.state.miniumAmount)
                .send({
                    from: accounts[0]
                });
        } catch (err) {
            // Return the error to the user
            this.setState({ errorMessage: err.message });
        }

    };

    render() {
        return (
            <Layout>
                <h2> Create a Project! </h2>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>
                            Define the minimum amount to participate in the project
                        </label>
                        <Input
                            label="Wei"
                            labelPosition="right"
                            color="black"
                            value={this.state.miniumAmount}
                            onChange={event => this.setState({ miniumAmount: event.target.value })}
                        />
                    </Form.Field>

                    <Message error header="Oh no!" content={this.state.errorMessage} />
                    <Button color="olive"> Create! </Button>
                </Form>
            </Layout>

        )
    }
}

export default ProjectCreate;