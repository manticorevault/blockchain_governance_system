import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Form, Input, Button, Message, Icon } from "semantic-ui-react";
import Project from "../../../ethereum/project";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import { isObject } from "util";

class RequestCreate extends Component {

    // Initialize the State Object
    state = {
        value: "",
        description: "",
        recipient: "",
        loading: false,
        errorMessage: ""
    }

    // Define a function to get the link from the URL and pass it as props
    static async getInitialProps(props) {
        const { address } = props.query

        return { address };
    }

    // Define a function to handle the form submittion
    onSubmit = async event => {
        // Prevent the form from submitting itself
        event.preventDefault();

        const project = Project(this.props.address);

        // Destructure the state object
        const { description, value, recipient } = this.state;

        // Update the state loading and reset the errorMessage
        this.setState({ loading: true, errorMessage: "" })

        try {
            const accounts = await web3.eth.getAccounts();

            await project.methods.addRequest(
                description,
                web3.utils.toWei(value, "ether"),
                recipient
            ).send({ from: accounts[0] })

            // Get the user back to the list of requests
            Router.pushRoute(`/projects/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        // reset the state loading back to false
        this.setState({ loading: false })
    }

    render() {
        return (
            <Layout>

                <Link route={`/projects/${this.props.address}/requests`}>
                    <a>
                        <Button
                            secondary
                            icon
                            labelPosition="left"
                        >
                            <Icon name="arrow alternate circle left outline" />
                            Request List
                        </Button>
                    </a>
                </Link>
                <h3> Create a New Request </h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>
                            Description
                        </label>
                        <Input
                            icon="write square"
                            iconPosition="left"
                            placeholder="Describe your proposal"
                            value={this.state.description}
                            onChange={event =>
                                this.setState({ description: event.target.value })
                            }
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>
                            Value in ETH
                        </label>
                        <Input
                            icon="money bill alternate outline"
                            iconPosition="left"
                            placeholder="How much will it cost?"
                            value={this.state.value}
                            onChange={event =>
                                this.setState({ value: event.target.value })
                            }
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>
                            Recipient Address
                        </label>
                        <Input
                            icon="send"
                            iconPosition="left"
                            placeholder="Which address are you sending the value to?"
                            value={this.state.recipient}
                            onChange={event =>
                                this.setState({ recipient: event.target.value })
                            }
                        />
                    </Form.Field>

                    <Message error header="Oh no!" content={this.state.errorMessage} />
                    <Button color="olive" loading={this.state.loading}>
                        Create Request
                    </Button>
                </Form>
            </Layout>
        )
    }
}

export default RequestCreate;