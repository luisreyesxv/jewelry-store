import React from 'react'
import {Placeholder, Image,Grid, Header, Container} from 'semantic-ui-react'


import MobileContextConsumer from '../../Context/MobileContextConsumer'


const HomePageHero = (props)=>{


    const content = ()=>{

        return(
            <div className="homepage-hero-text-container">
            <p id="homepage-hero-header">
              Bartolome Jewelry
             </p>
             <div  id="homepage-hero-small-text">
                 <p>
                     Smashing together everyday fashion and fine jewelry, Bartolome Jewelry offers a wide collection of custom pieces and designer products.
                 </p>
                 <p>We design masterpieces for you. Come talk to us.</p>
             </div>
         
         
    
         
         </div>

        )
    }



    return(

        <Grid.Row id="homepage-hero" >
            {props.mobile? content() : <Grid.Column width="16" children={content()} /> }
        </Grid.Row>
    )
}

export default  MobileContextConsumer(HomePageHero)