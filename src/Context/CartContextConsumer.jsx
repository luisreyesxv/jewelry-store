import React from 'react'
import CartContext from './CartContext'


const CartContextConsumer =(Component)=>{

    
     
    return (props)=>{

        return (
        <CartContext.Consumer>
        {context => <Component {...props} {...context} />}
        </CartContext.Consumer>
        )
    }

    
}

export default CartContextConsumer