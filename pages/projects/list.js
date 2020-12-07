import React, { Component } from "react";
import { Card, Button, Label } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import Layout from "../../components/Layout";
import { Link } from "../../routes";

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
                header: <Label color="black" style={{ borderRadius: "5px", overflowWrap: "break-word" }}> Short ID: {address.substr(0, 9)} </Label>,
                description: "",
                extra: (
                    <Link route={`/projects/${address}`}>
                        <a>
                            <Button color="olive" icon="eye" content="View Project" />
                        </a>
                    </Link>
                ),
                fluid: true,
                style: { overflowWrap: "break-word" }
            }

        });

        return <Card.Group itemsPerRow={2} items={items} />
    }


    render() {
        // Display the list of projects in the front end
        return (

            <Layout>
                <div>
                    <h1> Projects </h1>

                    {/* <Link route="/projects/create">
                        <a>
                            <Button
                                content="Start a new Project"
                                icon="add"
                                floated="right"
                                secondary
                            />
                        </a>
                    </Link> */}


                    {this.renderProjects()}
                </div>
            </Layout >
        )
    }
}


export default ProjectList;