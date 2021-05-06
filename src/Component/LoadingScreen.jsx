import React from 'react'
import {Grid,Loader, Container, Dimmer, Image} from 'semantic-ui-react'

import logoSVG from './Logos/logo'

const LoadingScreen = ()=>{


    return(

        <Container style={{paddingBottom:"3em"}} className="page-container-grid">
            <Grid doubling style={{height: "80vh", backgroundImage: "url(https://images.nappy.co/uploads/large/215921759780fjocv7nlya5k9xddlv26qtnkyny1ggd4ctpvzuc1jkfipspah4vhfult1u3mxzdixnp0isu8ohxnye8hfhhb7mi31tgjimzxkd7.jpg?auto=format&fm=jpg&w=1280&q=75)", backgroundSize: "100% 100%"}}>
                
                <Dimmer active id="loading-screen">
                    <Loader size="massive" >                       
                        <Image src={logoSVG} size="medium" />
                    </Loader>
            </Dimmer>
        </Grid>
        </Container>
        
    )
}


export default LoadingScreen