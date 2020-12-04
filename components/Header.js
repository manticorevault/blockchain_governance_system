import React from "react";
import { Menu, Button } from "semantic-ui-react";

// Create the functional component with the Header's Menu
export default () => {
    return (
        // Add some custom CSS to create a top margin
        <Menu style={{ marginTop: "10px" }}>
            <Menu.Item>
                <Button
                    content="Home"
                    // Add handshake or handshake outline
                    icon="connectdevelop"
                    href="/"
                    fluid
                    primary
                />
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Button
                        color="olive"
                        content="Project List"
                        href="/projects/list"
                        icon="unordered list" />
                </Menu.Item>
                <Menu.Item>
                    <Button
                        content="New Project"
                        href="/projects/create"
                        icon="add"
                        secondary
                    />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}