import React from 'react'
import {Grid, Header} from 'semantic-ui-react'


import MobileContextConsumer from '../../Context/MobileContextConsumer'


const HomePageHero = ()=>{


    const hero = ()=>{

        return(

 
            <Grid.Column width="8" stretched verticalAlign="middle">
                <Header  id="homepage-hero-header">
                    Bartolome Jewelry
                    <Header.Subheader id="homepage-hero-small-text">
                        <p>
                        Smashing together everyday fashion and fine jewelry, Bartolome Jewelry offers a wide collection of custom pieces and designer products.
                        </p>
                        <p>
                        We design masterpieces for you. Come talk to us.
                        </p>
                    </Header.Subheader>
                </Header>
            </Grid.Column>
            
        )
    }



    return(

        <Grid.Row columns="2" id="homepage-hero" >
            {hero()}
        </Grid.Row>
    )
}

export default  MobileContextConsumer(HomePageHero)