import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'




const HomePagePortfolioBanner =()=>{

    return(
        <Grid.Row centered  columns="16">
                    <Grid.Column as={Link} to="/AboutUs" textAlign="center" width="12"  className="homepage-custom-banner" id="about-us-banner">
                        <div className="homepage-hero-text-container"  >
                            <p className="homepage-custom-banner-text" style={{fontSize:"1.75em"}}>
                                Bartolome Jewelry is a project app made by Luis Reyes Bartolome
                            </p>
                            <p className="homepage-custom-banner-text">
                                Click here to see what this is all about
                            </p>
                        </div>
                    </Grid.Column>
        </Grid.Row>
    )
}


export default HomePagePortfolioBanner
