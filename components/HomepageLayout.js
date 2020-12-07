/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel'
import Head from "next/head";
import Link from "next/link";
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    GridColumn,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */


const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='MGMTLinks'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Transparent project management via Blockchain'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button inverted color="white" size='huge'>

            <Link href="/projects/create">
                Get Started
            </Link>
            <Icon name='right arrow' />

        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (


            <Media greaterThan='mobile'>

                <Head>
                    <link
                        async
                        rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/semantic-ui@2.0.0/dist/semantic.min.css"
                    />
                </Head>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>

                                <Menu.Item as='a' href="/" active>
                                    Home
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button
                                        href="/projects/list"
                                        color="olive"
                                        content="Project List"
                                        icon="unordered list"
                                    />
                                    <Button
                                        content="New Project"
                                        href="/projects/create"
                                        icon="add"
                                        inverted
                                        color="white"
                                        style={{ marginLeft: "10px" }}
                                    />
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Media>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Media as={Sidebar.Pushable} at='mobile'>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item as='a' active>
                            Home
            </Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                        <Menu.Item as='a'>Log in</Menu.Item>
                        <Menu.Item as='a'>Sign Up</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            Log in
                    </Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                    </Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <GridColumn width={5}>

                    </GridColumn>
                    <Grid.Column width={6} textAlign="center">
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            We Help Companies and Companions
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us handle your governance management in a simple, efficient and elegant way.
                        </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Governance over the Blockchain
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes that's right! Use the Ethereum Blockchain to deal with your company's decisions.
                            Anonymous voting, instant transactions and high auditing capacity.
                        </p>
                    </Grid.Column>
                    {/* <Grid.Column floated='right' width={6}>
                        <Image src='/src/dashboard.png' alt="The project dashboard" />
                    </Grid.Column> */}
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Link href="/projects/list">
                            <a>
                                <Button size="large" color="olive">
                                    Check It Out!
                                    <Icon name='right arrow' />
                                </Button>
                            </a>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
              </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
)

export default HomepageLayout
