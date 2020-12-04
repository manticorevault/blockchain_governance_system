import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { Link } from "../routes";

// Create the functional component with the Header's Menu
export default () => {
    return (
        // Add some custom CSS to create a top margin
        <Menu style={{ marginTop: "10px" }}>
            <Link primary route="/">
                <Button
                    content="Home"
                    // Add handshake or handshake outline
                    icon="connectdevelop"
                    href="/"
                    primary
                />
            </Link>

            <Menu.Menu position="right">

                <Link route="/projects/list">
                    <Button
                        color="olive"
                        content="Project List"
                        href="/projects/list"
                        icon="unordered list"
                    />
                </Link>

                <Link route="/projects/create">
                    <Button
                        content="New Project"
                        href="/projects/create"
                        icon="add"
                        secondary
                    />
                </Link>

            </Menu.Menu>
        </Menu>
    )
}