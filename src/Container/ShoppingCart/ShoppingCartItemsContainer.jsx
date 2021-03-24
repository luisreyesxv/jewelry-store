import React from 'react'
import {Grid, Container,Item} from "semantic-ui-react"

import CartContextConsumer from '../../Context/CartContextConsumer'
import ShoppingCartItem from '../../Component/ShoppingCart/ShoppingCartItem'


const ShoppingCartItemsContainer = (props)=>{

    const mappingItems =()=>{

        return props.cart.map(item =>{
            return(
                <Grid.Row>
                    < ShoppingCartItem key={`shopping cart ${item.slug} - ${item.material}`}  {...item} item={item} changeCart={props.changeCart}/>
                </Grid.Row>
                    
            )
        })
    }

    return(
        <Container textAlign="center">
            <Grid centered style={{marginLeft: 0, marginRight: 0}} >
                {mappingItems()}
            </Grid>
        </Container>
        
    )
}


export default CartContextConsumer(ShoppingCartItemsContainer)