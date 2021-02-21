import React,{useState} from 'react'
import MobileContextConsumer from '../../Context/MobileContextConsumer'


// import {Menu, Button, Container,Segment,Sidebar, Icon, Dropdown} from 'semantic-ui-react'
import {Menu, Button, Container,Segment,Sidebar, Icon, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {shoppingCartSVG} from '../Logos/logo'




const ShoppingCartComponent =(props)=>{
    const [shoppingCartOpened,setShoppingCartOpened] = useState(false)


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
        >

        Shopping Cart Stuff


       </Sidebar>
       <Menu.Item onClick={()=> setShoppingCartOpened(true)} compact="true" position="right">
           
      <Icon.Group>
      <div >26</div>
      <Image src={shoppingCartSVG} size="mini" name='shopping bag'/>
      {/* <Icon name="cart" size="huge"/> */}
      {/* <div style={{color:"black"}}>6</div> */}
      </Icon.Group>
  
            </Menu.Item>
       </>


    )


}

export default MobileContextConsumer(ShoppingCartComponent)

