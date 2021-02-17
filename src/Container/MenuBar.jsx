import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import UserContextConsumer from '../Context/UserContextConsumer'
import MobileContextConsumer from '../Context/MobileContextConsumer'
import DropdownComponent from '../Component/Menu/DropdownComponent'
import ShoppingCartComponent from '../Component/Menu/ShoppingCart'

import logoSVG from '../Component/Logos/logo'



import {Menu, Button, Container,Segment,Sidebar, Icon, Image} from 'semantic-ui-react'




const MenuBar =(props)=>{

    const [sidebarOpened,setSidebarOpened] = useState(false)
    const [activeTab,setActiveTab] = useState()

    const customForms = [
        {text: "Custom Jewelry Inquiry", link: "/inquiry/CustomJewelry"},
        {text: "Luxury Timepiece Inquiry", link: "/inquiry/LuxuryTimePiece"},
        {text: "Repair Inquiry", link: "/inquiry/Repair"},
        {text: "2nd Chance Inquiry", link: "/inquiry/2ndChance"}
    ]

    const collectionCategories =[
        {text: "Watches", link: "/collections/Watches"},
        {text: "Necklaces", link: "/collections/Necklaces"}
    ]


    const mobileDropdown = ()=> {     
       return (
           <>
            <Sidebar 
            as={Menu}
            id="sidebar-main-menu"
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
            <Menu.Item as={Link} to="/" name="Home">
                 <Image src={logoSVG} size="small"/>
            </Menu.Item>
            <Menu.Item >
                     <ShoppingCartComponent />
                </Menu.Item>
            




            </>
       )
    }

    const pcMenu = ()=>{
        return(
            <>
                {MenuItems()}
                <Menu.Item position="right">
                     <ShoppingCartComponent />
                </Menu.Item>
                
            </>
        )
    }


    const MenuItems = () => {
       return ( 
             <>

             
                    <Menu.Item className={props.mobile?"mobile-menu-bar-link":"menu-bar-link"} as={Link} to="/" name="Home"  onClick={()=>setSidebarOpened(false)} >
                        {props.mobile?    "Home":
                        <Image src={logoSVG}  size="small"/>
                    }
                    </Menu.Item>

                    <DropdownComponent title="Collections" items={collectionCategories} name="Collections" setActive={setActiveTab} active={activeTab} setSidebarOpen={setSidebarOpened}/>
                   
                    <DropdownComponent title="Custom Work Inquiry" items={customForms} name="Custom Work Inquiry" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />
                    {/* <Menu.Item className={props.mobile?"mobile-menu-bar-link":"menu-bar-link"}> Luis</Menu.Item> */}
                    {props.user? <Menu.Item> {props.user}</Menu.Item> : null}
                    {/* <Menu.Item className={props.mobile?"mobile-menu-bar-link":"menu-bar-link"} position={props.mobile?null:"right"} compact>
                        <Button as='a' inverted={false} >
                            Log in
                        </Button>
                        <Button as='a' inverted={false} primary={true} style={{ marginLeft: '0.5em' }}>
                            Sign Up
                        </Button>
                        Account
                    </Menu.Item> */}
                    <DropdownComponent title="Account" items={[{text:"Login",link:"/account"}]} name="Account" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />
            </>
       )
    }


    return (
<>
        {/* <Segment basic> */}
            <Menu  id="primary-menu-bar" 
            borderless={true} 
            inverted  
            fluid  
            widths={props.mobile?null:"6" }
            >

                {/* <Container textAlign="center" fluid> */}
                    {props.mobile? mobileDropdown():pcMenu()}
                    
                    

                    
                {/* </Container> */}

            </Menu>
        {/* </Segment> */}

    </>
    )
}

export default MobileContextConsumer(UserContextConsumer(MenuBar))