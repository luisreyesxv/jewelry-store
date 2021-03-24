import React from 'react'
import {Grid, Container, Button, Label} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import SmoothLoadingImage from "../SmoothLoadingImage"


const ShoppingCartItem =(props)=>{

    return(
                   
                        <Container className="shopping-cart-item">
                           <Grid style={{marginLeft: 0, marginRight: 0}} columns="equal">
                                <Grid.Row>
                                    <Grid.Column width="4">
                                        <SmoothLoadingImage src={props.image} className="shopping-cart-image" />
                                    </Grid.Column>
                                    <Grid.Column width="7"   className="shopping-cart-item-name">
                                        <Grid.Row>
                                            <Link to={`/items/${props.slug}?material=${props.material}`} >
                                                {props.name}
                                            </Link>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <em>{props.material.toUpperCase()}</em>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign="middle" textAlign="right">
                                        <Button icon="trash" color="red" size="tiny" onClick={()=> props.changeCart({cartItem: props.item, instruction: "delete"})} />

                                    </Grid.Column>
                                    
                                    
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column width="8" >
                                                < Button.Group >
                                                   <Label basic style={{border: "none",background:"transparent"}}> Qty</Label>
                                                        <Button icon="minus" size="mini" attached="left" onClick={()=> props.changeCart({cartItem: props.item, instruction: "modify", quantity: props.quantity-1}) }/>
                                                        <Label  style={{border: "none"}} basic>{props.quantity}</Label>
                                                        <Button icon="plus" size="mini" attached="right" onClick={()=> props.changeCart({cartItem: props.item, instruction: "modify", quantity: props.quantity+1}) }/>
                                                </Button.Group>
                                         
                                    </Grid.Column>

                                    <Grid.Column width="8" textAlign="right">
                                        <div className="shopping-cart-item-price">
                                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(props.price*props.quantity)}
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>

                            </Grid>
                            </Container>
                     
                        

    )


}

export default ShoppingCartItem