import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";


export default (props) => {
    return (
        // Contain the maximum width with a container
        <Container>
            <h1>
                <Header />
            </h1>
            {props.children}

        </Container>
    )
};