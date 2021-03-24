import React,{useState} from 'react'
import MobileContextConsumer from '../../Context/MobileContextConsumer'
import CartContextConsumer from '../../Context/CartContextConsumer'

// import {Menu, Button, Container,Segment,Sidebar, Icon, Dropdown} from 'semantic-ui-react'
import {Menu, Button, Container,Segment,Sidebar, Icon, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {shoppingCartSVG} from '../Logos/logo'

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
            <ShoppingCartItemsContainer/>


       </Sidebar>
       <Menu.Item onClick={()=> setShoppingCartOpened(true)} compact="true" position="right">
           
      <Icon.Group>
      <div >{props.cart,props.cart.reduce(cartQuantityReducer,0)}</div>
      <Image src={shoppingCartSVG} size="mini" name='shopping bag'/>
      </Icon.Group>
  
            </Menu.Item>
       </>


    )


}

export default CartContextConsumer(MobileContextConsumer(ShoppingCartComponent))

