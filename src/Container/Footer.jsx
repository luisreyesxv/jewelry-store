import React from 'react'

import {Grid,Segment, Container, List, Divider, Header, Image} from 'semantic-ui-react'



const Footer = ()=>{


    return (
        <Segment vertical divided="true" id="footer" >
            {/* <Container textAlign='center'>
        
                <Grid  divided stackable>
                    <Grid.Row centered>
                        Footer Section
                    </Grid.Row>
                    <Grid.Row centered columns="3">
                        <Grid.Column>
                            About us
                        </Grid.Column>
                        <Grid.Column>
                            Contact us
                        </Grid.Column>
                        <Grid.Column>
                            Created By Luis Reyes Bartolome
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container> */}

<Container >
        <Grid stackable>
                    <Grid.Row centered>
                        Footer Section
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 1' />
                            <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>


                           
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 2' />
                            {/* <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List> */}
                        </Grid.Column>
                        {/* <Grid.Column width={3}>
                            <Header inverted as='h4' content='Group 3' />
                            <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                            </List>
                        </Grid.Column> */}
                        <Grid.Column width={7}>
                            <Header inverted as='h4' content='Footer Header' />
                            <p>
                            Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
        </Grid>
        <Divider section/>
        Created By Luis Reyes Bartolome

        {/* <Divider inverted section />
        <Image centered size='mini' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List> */}
      </Container>
        </Segment>
      
    )
}

export default Footer