import React, { Component } from "react";
import factory from "../ethereum/factory";

// Access the Deployed Projects and display them
class ProjectList extends Component {
    // Define the getInitialProps function in a static way
    static async getInitialProps() {
        const projects = await factory.methods.getDeployedProjects().call();

        // Return the object from the Component
        return { projects };
    }

    render() {
        // Display the list of projects in the front end
        return <div>{this.props.projects[0]}</div>
    }
}


export default ProjectList;