import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import Layout from "../../components/Layout";

// Access the Deployed Projects and display them
class ProjectList extends Component {
    // Define the getInitialProps function in a static way
    static async getInitialProps() {
        const projects = await factory.methods.getDeployedProjects().call();

        // Return the object from the Component
        return { projects };
    }

    // A function to create a card group component
    // (Based on Semantic UI)
    renderProjects() {
        const items = this.props.projects.map(address => {
            return {
                header: <h2>Short ID: {address.substr(0, 9)} </h2>,
                description: address,
                extra: <Button color="olive" icon="eye" content="View Project" />,
                fluid: true,
            }

        });

        return <Card.Group items={items} />
    }

    render() {
        // Display the list of projects in the front end
        return (

            <Layout>
                <div>
                    <h1> Projects </h1>

                    <Button
                        content="Start a new Project"
                        icon="add"
                        floated="right"
                        secondary
                    />

                    {this.renderProjects()}
                </div>
            </Layout >
        )
    }
}


export default ProjectList;