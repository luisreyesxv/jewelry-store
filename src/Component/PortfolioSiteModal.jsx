import React, {useState} from 'react'
import {Modal, Grid, Image} from 'semantic-ui-react'



const PortfolioSiteModal =()=>{
    const [open, setOpen] = useState(true)
    return(
        <Modal
        open={open}
        onClose={()=>setOpen(false)}
        basic ={true}
        closeIcon = {true}
        centered
        >
            <Modal.Header style={{textAlign:"center"}}> Thanks for Visiting My Project eCommerce App</Modal.Header>
            <Modal.Content>
                <Modal.Description >
                    
                    <Grid columns="equal" reversed="mobile" stackable>
                        <Grid.Column>
                            <a target="_blank" rel="noopener noreferrer" href="https://LuisReyesBartolome.com">
                                <Image size="large" src="https://luisreyesbartolome.com/images/transparent%20-%20Copy.png" />
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                            Thanks for visiting my app. 
                            <strong> {process.env.REACT_APP_TITLE}</strong> is an application just meant to showcase some standard eCommerce practices. The main intentions for this making this are to
                                <ul>
                                    <li>Make an application using Semantic-UI</li>
                                    <li>Have it set-up/process payments to Stripe CC processor</li>
                                    <li>Have it connect to an outside back-end API</li>
                                    <li>Make it customizable so it could fit most products</li>
                                    <li>Have fun making another app that should address most of the wants for a made-up retail company</li>
                                </ul>
                                </p>
                                <strong>
                                    <p>
                                        It is important to note that this (unfortunately) isn't a real jewelry store. The prices are made up, the images of the jewelry were found online
                                        (<i> credits can be found in the footer section</i>). Though the application is really communicating with Stripe, this is using a test API account and
                                         the transactions aren't going to actually go through.
                                    </p>
                                </strong>
                                <br/>
                                    <p>
                                        If you are interested in seeing more of my work or want to reach out to me to help make an application for you, feel free to click on the handsome picture over here & visit my portfolio website.
                                    </p>
                              
                            
                        </Grid.Column>
                        
                    </Grid>
                </Modal.Description>
            </Modal.Content>

        </Modal>



    )
}

export default PortfolioSiteModal