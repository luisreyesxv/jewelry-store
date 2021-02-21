import React from 'react'

import {Grid,Segment} from 'semantic-ui-react'



const Footer = ()=>{


    return (

        <Segment vertical id="footer" >
        
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
        </Segment>
      
    )
}

export default Footer