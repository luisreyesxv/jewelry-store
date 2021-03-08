import React from 'react'
import {Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom'




const HomePageCustomInquiryBanner =()=>{

    return(
        <Grid.Row centered  columns="3">
                    <Grid.Column as={Link} to="/inquiry" textAlign="center" width="12"  id="homepage-custom-banner">
                        <div className="homepage-hero-text-container"  >
                            <p className="homepage-custom-banner-text" style={{fontSize:"1.75em"}}>
                                Looking For a Custom-made Piece?
                            </p>
                            <p className="homepage-custom-banner-text">
                                Come fill out a Custom Inquiry
                            </p>
                        </div>
                    </Grid.Column>
        </Grid.Row>
    )
}


export default HomePageCustomInquiryBanner

