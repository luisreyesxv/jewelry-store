import React from 'react'
import {Grid, Button,Header, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import ShoppingCartItem from '../ShoppingCart/ShoppingCartItem'


const CartComponents = (props)=>{
    const mappingCartItems = ()=>{
        return props.cart.map(item =>{
            return(
                <Grid.Row>
                    < ShoppingCartItem key={`checkout ${item.slug} - ${item.material}`}  {...item} item={item} changeCart={props.changeCart} disabled={props.cartFinalized}/>
                </Grid.Row>
                    
            )
        })
    }

    const emptyCart =()=>{

        return(
            <Grid>
                <Grid.Row centered={true}>
                                
                    
                        <Header as={Grid.Row} icon className="checkout-cart-header" >
                            <Icon name="cart" size="massive"  className="checkout-cart-header" />
                            <h1 className="checkout-cart-header"> Cart's Empty</h1>
                            <Header.Subheader className="checkout-cart-header">
                                <Button as={Link} to="/"  id="shopping-cart-button">
                                    See What's For Sale
                                </Button>
                            </Header.Subheader>
                        </Header>
                    

                </Grid.Row>
            </Grid>
        )
    }

    const existingCart = () =>{

        return(
        <>
            <Grid container celled="internally">
                {mappingCartItems()}
            </Grid>
            <Grid.Row>
                <Button.Group fluid>
                    <Button id={props.cartFinalized? "checkout-cart-edit-button" : "checkout-cart-finalize-button"}   onClick={()=>props.setCartFinalized(!props.cartFinalized)}>
                        {props.cartFinalized? "Edit Cart" : "Finalize Cart"}
                    </Button>
                    <Button.Or />
                    <Button className="shopping-cart-button" onClick={()=>props.setActiveAccordion("shipping")} disabled={!props.cartFinalized}>
                        Confirm
                    </Button>
                </Button.Group>
            </Grid.Row>
        </>
        )
    }


    return(
       props.cart?.length? existingCart() : emptyCart()

    )
}




export default CartComponents