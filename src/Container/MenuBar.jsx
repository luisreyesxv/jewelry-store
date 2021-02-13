import React,{useState, useEffect} from 'react'
import UserContextConsumer from '../Context/UserContextConsumer'
import MobileContextConsumer from '../Context/MobileContextConsumer'

import {Menu, Button, Container,Segment,Sidebar, Icon} from 'semantic-ui-react'




const MenuBar =(props)=>{

    const [sidebarOpened,setSidebarOpened] = useState(false)

    const mobileDropDown = ()=> {
       
       
       return (
           <>
            <Sidebar 
            as={Menu}
            animation = "overlay"
            inverted = {true}
            onHide ={()=>setSidebarOpened(false)}
            vertical = {true}
            visible={sidebarOpened}
            >
                <Menu.Item onClick={()=>   setSidebarOpened(false)} position = "left">
                    <Icon name="arrow left" />
                </Menu.Item>
                {MenuItems()}
            </Sidebar>

            <Menu.Item onClick={()=> setSidebarOpened(true)} compact>
                    <Icon name='sidebar'  size="small"/>
            </Menu.Item>


            </>


       )




    }

    const MenuItems = () => {
       return ( 
             <>
                    <Menu.Item> swag</Menu.Item>
                    <Menu.Item> Luis</Menu.Item>
                    <Menu.Item> {props.mobile?"mobile":"PC"}</Menu.Item>
                    <Menu.Item> Luis</Menu.Item>
                    {props.user? <Menu.Item> {props.user}</Menu.Item> : null}
                    <Menu.Item position='right' compact>
                        <Button as='a' inverted={false} >
                            Log in
                        </Button>
                        <Button as='a' inverted={false} primary={true} style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                    </Menu.Item>
            </>
       )
    }


    return (

        <Segment basic>
            <Menu  name="swag" 
            fixed="top"
            size = "large"
            basic
            
            borderless={true} 
            inverted       
            style={{backgroundColor:"transparent"}}    
            >
                <Container >
                    {props.mobile? mobileDropDown():MenuItems()}
                    
                    

                    
                </Container>

            </Menu>
        </Segment>
    )
}

export default MobileContextConsumer(UserContextConsumer(MenuBar))