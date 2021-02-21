import React from 'react'
import {Container, Image, Grid} from 'semantic-ui-react'

import {normal404Icon} from '../Logos/404'



const Normal404Page =()=>{


    return (
        <Container  text id="content-not-found-page">
            "404 page"
            <Grid centered>
                <Grid.Row >
                <Image src ={normal404Icon} size="medium" />

                </Grid.Row>
                <Grid.Row>
                    404 Page
                </Grid.Row>

            </Grid>
        </Container>
    )
}


export default Normal404Page