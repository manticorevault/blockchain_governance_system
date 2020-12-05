import React, { Component } from "react";
import Layout from "../../components/Layout";
import Project from "../../ethereum/project";

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
            minimumAmount: info[0],
            balance: info[1],
            requestsCount: info[2],
            votersCount: info[3],
            managerAddress: info[4]
        };
    }


    render() {
        return (
            <Layout>
                <h3> Single Project </h3>
            </Layout>
        )
    }
}

export default ProjectSingle;