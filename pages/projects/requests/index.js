import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button } from "semantic-ui-react";
import { Link } from "../../../routes";


class RequestIndex extends Component {

    // Define a function to get the project address and pass it as props
    static async getInitialProps(props) {
        const { address } = props.query.address

        return { address };
    }

    render() {
        return (
            <Layout>
                <h3> Request List </h3>\
                <Link route={`/projects/${this.props.address}/requests/create`}>
                    <a>
                        <Button secondary>
                            Create a New Request
                        </Button>
                    </a>
                </Link>
            </Layout>

        )
    }
}

export default RequestIndex;