import React,{useEffect} from 'react'
import {Container, Image, Grid, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'

import {normal404Icon} from '../Logos/404'

useEffect(()=>{
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
    ReactGA.event({
        category: "404",
        action: window.location.href
        })
},[])
const Normal404Page =(props)=>{


    return (
        <Container text={true}  id="content-not-found-page">
            <Grid centered={true} stackable={true}   >
                <Grid.Row    stackable="true" columns='2' >
                    <Grid.Column >
                        <Image  src ={normal404Icon} size="medium"/>
                    </Grid.Column>
                    <Grid.Column  verticalAlign="middle" textAlign="center" stretched>
                        <Header>
                           Oops! Can't Find The Page
                        </Header>
                        <div  className="subtext404">
                            We couldn't find the page you were looking for at <aside><strong> {window.location.href}</strong></aside> Try going back to the 
                            <Link to="/"> HomePage</Link>
                            , click on one of the options from the menu above.
                        </div>
                    </Grid.Column>

                </Grid.Row>
               

            </Grid>
        </Container>
    )
}


export default Normal404Page