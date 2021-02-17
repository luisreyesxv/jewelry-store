import React,{useState} from 'react'
import MobileContextConsumer from '../../Context/MobileContextConsumer'


// import {Menu, Button, Container,Segment,Sidebar, Icon, Dropdown} from 'semantic-ui-react'
import {Menu, Button, Container,Segment,Sidebar, Icon, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



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
       <Menu.Item onClick={()=> setShoppingCartOpened(true)} compact>
           {/* <Icon.Group> */}
                    {/* <Icon name='cart'  size="large"/> */}
                    {/* <Icon circular  fitted={true} style={{color:"red"}} corner="top right"> 3</Icon> */}

                    {/* <Icon.Group id="shopping-cart-icon" size="large" > */}
      <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMTkuNWMwIC44MjktLjY3MiAxLjUtMS41IDEuNXMtMS41LS42NzEtMS41LTEuNWMwLS44MjguNjcyLTEuNSAxLjUtMS41czEuNS42NzIgMS41IDEuNXptMy41LTEuNWMtLjgyOCAwLTEuNS42NzEtMS41IDEuNXMuNjcyIDEuNSAxLjUgMS41IDEuNS0uNjcxIDEuNS0xLjVjMC0uODI4LS42NzItMS41LTEuNS0xLjV6bTYuMzA1LTE1bC0zLjQzMiAxMmgtMTAuNDI4bC0zLjc3Ny05aC0yLjE2OGw0LjYxNSAxMWgxMy4yMzlsMy40NzQtMTJoMS45MjlsLjc0My0yaC00LjE5NXoiLz48L3N2Zz4=" size={props.mobile?"mini":"large"} name='shopping bag'/>
      <span className='badge' id='shopping-cart-icon-number'> 5 </span>
    {/* </Icon.Group> */}
            {/* </Icon.Group> */}
            </Menu.Item>
       </>


    )


}

export default MobileContextConsumer(ShoppingCartComponent)

