import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react"
import Layout from "../../components/Layout";

class ProjectCreate extends Component {

    state = {
        miniumAmount: ""
    };

    render() {
        return (
            <Layout>
                <h2> Create a Project! </h2>

                <Form>
                    <Form.Field>
                        <label>
                            Minimum amount to participate in the project
                        </label>
                        <Input
                            label="Wei"
                            labelPosition="right"
                            color="black"
                            value={this.state.miniumAmount}
                            onChange={event => this.setState({ miniumAmount: event.target.value })}
                        />
                    </Form.Field>

                    <Button color="olive"> Create! </Button>
                </Form>
            </Layout>

        )
    }
}

export default ProjectCreate;