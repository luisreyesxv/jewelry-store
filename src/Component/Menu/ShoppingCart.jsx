import React,{useState} from 'react'
import MobileContextConsumer from '../../Context/MobileContextConsumer'
import CartContextConsumer from '../../Context/CartContextConsumer'

import {Menu,Sidebar, Icon} from 'semantic-ui-react'

import ShoppingCartItemsContainer from "../../Container/ShoppingCart/ShoppingCartItemsContainer"




const ShoppingCartComponent =(props)=>{
    const [shoppingCartOpened,setShoppingCartOpened] = useState(false)
    
    const cartQuantityReducer = (previous,current)=>{
        return(
            previous+current.quantity
        )
    }

    return(

        <>
        <Sidebar 
        as={Menu}
        id="sidebar-main-menu"
        animation = "overlay"
        direction="right"
        inverted = {true}
        onHide ={()=>setShoppingCartOpened(false)}
        vertical = {true}
        visible={shoppingCartOpened}
        width= "wide"
        >
                <Menu.Item onClick={()=>   setShoppingCartOpened(false)} position = "right">
                    <Icon name="close" />
                </Menu.Item>
            <ShoppingCartItemsContainer setShoppingCartOpened={setShoppingCartOpened} disabled={false}/>


       </Sidebar>
       <Menu.Item onClick={()=> setShoppingCartOpened(true)} compact="true" position="right">
           
  
      <Icon.Group as="div" icon id="menu-bar-cart" size="small">
        <Icon name="cart"  size="large" />
        <div >{props.cart,props.cart.reduce(cartQuantityReducer,0)}</div>
    </Icon.Group>
  
            </Menu.Item>
       </>


    )


}

export default CartContextConsumer(MobileContextConsumer(ShoppingCartComponent))

