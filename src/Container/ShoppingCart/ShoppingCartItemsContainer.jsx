import React,{useEffect} from 'react'
import {Grid, Container,Icon, Header, Divider, Button} from "semantic-ui-react"
import {Link, useLocation} from 'react-router-dom'

import CartContextConsumer from '../../Context/CartContextConsumer'
import ShoppingCartItem from '../../Component/ShoppingCart/ShoppingCartItem'


const ShoppingCartItemsContainer = (props)=>{

    const {pathname} = useLocation()
    let disabled = (pathname === "/checkout")

    useEffect(()=>{
        disabled = (pathname === "/checkout")

    },[pathname])

    const mappingItems =()=>{

        return props.cart.map(item =>{
            return(
                <Grid.Row>
                    < ShoppingCartItem key={`shopping cart ${item.slug} - ${item.material}`}  {...item} item={item} changeCart={props.changeCart} disabled={disabled}/>
                </Grid.Row>
                    
            )
        })
    }

    const emptyCart =()=>{

        return(
            <Grid.Row centered={true}>
                            
                
                    <Header as={Grid.Row} icon className="shopping-cart-header" >
                        <Icon name="cart" size="massive"  className="shopping-cart-header"/>
                        <h1 className="shopping-cart-header"> Cart's Empty</h1>
                        <Header.Subheader className="shopping-cart-subheader">
                            <Button as={Link} to="/"  id="shopping-cart-button" onClick={()=>props.setShoppingCartOpened?.(false)}>
                                See What's For Sale
                            </Button>
                        </Header.Subheader>
                    
                
              
                </Header>
                

            </Grid.Row>
        )
    }

    const existingCart =()=>{

        const totalPriceReducer=(previous,current)=> previous+ (current.price * current.quantity)

        return(

            <>
            {mappingItems()}
            <Divider />

            <Grid.Row columns="equal">
                <Grid.Column width="10">
                
                    <h2 className="shopping-cart-subtotal">
                        {`SUBTOTAL: ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(props.cart.reduce(totalPriceReducer,0))}`}
                    </h2>
                </Grid.Column>
                <Grid.Column  verticalAlign="middle">
                    <Button id="shopping-cart-button" fluid={true} as={Link} to="/checkout" onClick={()=>props.setShoppingCartOpened(false)}> Checkout</Button>
                </Grid.Column>
            </Grid.Row>


            </>
        )
    }


    return(
        <Container textAlign="center">
            <Grid centered style={{marginLeft: 0, marginRight: 0}} >
            <h1 className="shopping-cart-header">Shopping Cart</h1>
                {props.cart.length? existingCart() : emptyCart()}
            </Grid>
        </Container>
        
    )
}


export default CartContextConsumer(ShoppingCartItemsContainer)