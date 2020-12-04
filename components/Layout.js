import React from "react";
import Header from "./Header";
import Head from "next/head";
import { Container } from "semantic-ui-react";


export default (props) => {
    return (
        // Contain the maximum width with a container
        // Add a next/head component to move the stylesheet to the head tag
        <Container>
            <Head>
                <link
                    async
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css"
                />
            </Head>

            <Header />
            {props.children}

        </Container>
    )
};