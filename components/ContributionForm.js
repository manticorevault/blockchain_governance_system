import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";

class ContributionForm extends Component {
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>
                        Contribution Amount
                        <Input
                            label="ETH"
                            labelPosition="right"
                        />
                    </label>
                </Form.Field>

                <Button color="olive">
                    Contribute!
                </Button>
            </Form>
        )
    }
}

export default ContributionForm;