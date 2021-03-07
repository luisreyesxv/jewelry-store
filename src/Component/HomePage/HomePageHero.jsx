import React from 'react'
import {Placeholder, Image,Grid, Header} from 'semantic-ui-react'


import MobileContextConsumer from '../../Context/MobileContextConsumer'


const HomePageHero = (props)=>{

    const mobileHero =()=>{

        return(
            <Grid.Column stretched>
                Mobile
            </Grid.Column>
        )
    }


    const pcHero=()=>{


        return(
            <>
            <Grid.Column width="16" >
                {/* <div className="itemCardMaterials" > */}
                    <div className="homepage-hero-text-container">
                       <span id="homepage-hero-header">
                         Bartolome Jewelry
                        </span>
                        <div  id="homepage-hero-small-text">
                            <p>
                                Smashing together everyday fashion and fine jewelry, Bartolome Jewelry offers a wide collection of custom pieces and designer products.
                                We believe

                                
 
                            </p>
                            <p>We design masterpieces for you.</p>
                        </div>
                    
                    
               
                    
                    </div>
                    
                {/* </div> */}
                
                    
                
            </Grid.Column> 
           
            {/* <Grid.Column floated="right" style={{ margin:"10%"}}>
                PC Buttons
            </Grid.Column> */}
            </>
            
            )
    }



    return(


        // <Image size="large" >
        // <Placeholder fluid>
        //     <Placeholder.Paragraph>
        //     <Placeholder.Image rectangular content="blahblahblahblah" />
        //     </Placeholder.Paragraph>
        // </Placeholder>
        // </Image>

        // <Grid.Column>

        <Grid.Row id="homepage-hero" >

            {props.mobile? mobileHero():pcHero()}

        </Grid.Row>

        // "luis"

    )
}

export default  MobileContextConsumer(HomePageHero)