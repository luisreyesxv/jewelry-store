import React,{useState} from 'react'
import {Grid,Segment, Container, List, Divider, Header, Modal} from 'semantic-ui-react'



const Footer = ()=>{
const [message, setMessage] = useState()
const [modalOpened, setModalOpened] = useState(false)
const [creditsOpened, setCreditsOpened] = useState(false)


const modalClicked = (message)=>{
    setMessage(message)
    setModalOpened(true)
}
    


    return (

        <>
        <Segment vertical divided="true" id="footer" >

            <Container >
                    <Grid stackable>
                                <Grid.Row centered>
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={3}>
                                        <Header inverted as='h4' content='Help' />
                                        <List inverted animated>
                                        <List.Item onClick={()=>setCreditsOpened(true)} >Image Sources</List.Item>
                                        <List.Item onClick={()=>modalClicked("Shipping")}>Shipping</List.Item>
                                        <List.Item onClick={()=>modalClicked("Return Policy")}>Returns</List.Item>
                                        <List.Item onClick={()=>modalClicked("Frequently Asked Questions")}>FAQ</List.Item>
                                        <List.Item onClick={()=>modalClicked("Terms of Service")}>Terms of Service</List.Item>


                                    
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                    <Header inverted as='h4' content='Contact Me' />
                                        <List animated inverted>
                                            <List.Item >Luisreyesxvi@gmail.com</List.Item>
                                            <List.Item as='a' target="_blank" rel="noopener noreferrer"href="https://LuisReyesBartolome.com">My Portfolio Site</List.Item>
                                        </List>
                                        
                                    </Grid.Column>
                                    <Grid.Column width={7}>
                                        <Header inverted as='h4' content='THIS IS NOT A REAL JEWELRY STORE' />
                                        <p>
                                            This is a mock-up eCommerce Site created by Luis Reyes Bartolome.
                                        </p>
                                        
                                    </Grid.Column>
                                </Grid.Row>
                    </Grid>
                    <Divider section/>
                    <h2>Created By Luis Reyes Bartolome</h2>

            </Container>
        </Segment>
        <Modal
            onClose={()=> setModalOpened(false)}
            open={modalOpened}
            dimmer="blurred"
            scrollable={true}
            closeIcon={true}
            
        >
                <Modal.Header> {message}</Modal.Header>
                <Modal.Content>
                    Here is where if { process.env.REACT_APP_TITLE} was a real store, I would include the information for the <b>{message}</b>.
                </Modal.Content>
                <Modal.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat ut nulla nec malesuada. Duis turpis arcu, scelerisque quis imperdiet id, vulputate ut quam. Sed tincidunt scelerisque orci, sed vehicula mauris blandit nec. Mauris aliquam vel ante id viverra. Donec eleifend suscipit arcu. Ut condimentum varius finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sodales egestas consectetur. Vestibulum varius elit eget pellentesque facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi porttitor nisi at accumsan imperdiet. Phasellus lobortis ultrices tincidunt. Suspendisse potenti.

Nunc vel malesuada mauris, sit amet egestas metus. Quisque at gravida felis. Fusce vel pretium urna, vel maximus nisl. Cras tincidunt luctus dolor vitae hendrerit. Nullam a cursus sem. Cras facilisis semper lacus, eget auctor urna lacinia sed. Morbi eu dui sed lectus rhoncus congue tempor vitae nulla. Curabitur at elit id lorem porttitor mattis sed non diam. Phasellus at nibh non eros rhoncus efficitur a dictum dui.
                </Modal.Content>


        </Modal>
        <Modal
            closeIcon={true}
            onClose={()=> setCreditsOpened(false)}
            open={creditsOpened}
            dimmer="blurred"
            scrollable={true}
            
        >
                <Modal.Header>Credits for Images</Modal.Header>
                <Modal.Content>
                    <Header>Homepage Category Images</Header>
                    <List>
                        <List.Item>
                            Watch Photo by <a target="_blank" rel="noopener noreferrer" href= "https://burst.shopify.com/@thenomadbrodie?utm_campaign=photo_credit&amp;utm_content=Free+Tying+Up+Boot+Laces+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit">Brodie Vissers</a> from <a target="_blank" rel="noopener noreferrer" href="https://burst.shopify.com/tie?utm_campaign=photo_credit&amp;utm_content=Free+Tying+Up+Boot+Laces+Photo+%E2%80%94+High+Res+Pictures&amp;utm_medium=referral&amp;utm_source=credit">Burst</a>
                        </List.Item>
                        <List.Item>
                            Ring Photo by <a target="_blank" rel="noopener noreferrer" href="https://burst.shopify.com/@shopifypartners?utm_campaign=photo_credit&amp;utm_content=Free+Stock+Photo+of+Fist+With+Pride+Ring+%E2%80%94+HD+Images&amp;utm_medium=referral&amp;utm_source=credit">Shopify Partners</a> from <a target="_blank" rel="noopener noreferrer" href="https://burst.shopify.com/ring?utm_campaign=photo_credit&amp;utm_content=Free+Stock+Photo+of+Fist+With+Pride+Ring+%E2%80%94+HD+Images&amp;utm_medium=referral&amp;utm_source=credit">Burst</a>
                        </List.Item>
                        <List.Item>
                            Grills Photo by  <a target="_blank" rel="noopener noreferrer" href="https://www.toothologydental.com/grills-history/"> Toothology Dental </a>
                        </List.Item>
                        <List.Item>
                            Custom Work Inquiry Banner Photo by <a target="_blank" rel="noopener noreferrer" href="https://burst.shopify.com/@ndekhors?utm_campaign=photo_credit&amp;utm_content=Picture+of+Mens+Watch+%26+Ring+-+Free+Stock+Photo&amp;utm_medium=referral&amp;utm_source=credit">Nicole De Khors</a> from <a target="_blank" rel="noopener noreferrer" href="https://burst.shopify.com/watch?utm_campaign=photo_credit&amp;utm_content=Picture+of+Mens+Watch+%26+Ring+-+Free+Stock+Photo&amp;utm_medium=referral&amp;utm_source=credit">Burst</a>
                        </List.Item>
                        
                    </List>
                </Modal.Content>
                <Modal.Content>
                    <Header>Jewelry Images</Header>
                    <List>
                        <List.Item>
                            All images of grills come from <a target="_blank" rel="noopener noreferrer" href= "https://johnnyscustomjewelry.com/grillz/">King Johnny (Johnnys Custom Jewelry)</a>
                        </List.Item>
                        <List.Item>
                            Most images of rings come from <a target="_blank" rel="noopener noreferrer" href= "https://www.mytriorings.com/">My Trio Rings</a>
                        </List.Item>
                        <List.Item>
                            Most images of necklaces come from  <a target="_blank" rel="noopener noreferrer" href="https://www.kingice.com/"> King Ice </a>
                        </List.Item>
                        <List.Item>
                            Most images of earrings come from <a target="_blank" rel="noopener noreferrer" href="https://www.ross-simons.com/">Ross-Simmons</a>
                        </List.Item>
                        
                        
                    </List>
                </Modal.Content>
                <Modal.Content>
                    <List>
                        <List.Item>
                            Repair Inquiry Photo by <a target="_blank" rel="noopener noreferrer" href="https://burst.shopify.com/@matthew_henry?utm_campaign=photo_credit&amp;utm_content=Browse+Free+HD+Images+of+Using+a+Rotary+Tool+On+Jewelry&amp;utm_medium=referral&amp;utm_source=credit">Matthew Henry</a> from <a href="https://burst.shopify.com/tools?utm_campaign=photo_credit&amp;utm_content=Browse+Free+HD+Images+of+Using+a+Rotary+Tool+On+Jewelry&amp;utm_medium=referral&amp;utm_source=credit">Burst</a>
                        </List.Item>
                        <List.Item>
                            Every other image else (not jewelry)  comes from <a target="_blank" rel="noopener noreferrer" href="https://Nappy.co" >Nappy.Co</a>
                        </List.Item>
                        
                    </List>

                </Modal.Content>



        </Modal>

        </>
      
    )
}

export default Footer