import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import UserContextConsumer from '../Context/UserContextConsumer'
import MobileContextConsumer from '../Context/MobileContextConsumer'
import DropdownComponent from '../Component/Menu/DropdownComponent'
import ShoppingCartComponent from '../Component/Menu/ShoppingCart'
import SearchBarContainer from './SearchBarContainer'
import LogInButton from '../Component/Log-In/LogInButton'
import categories from '../Component/categories'

import logoSVG from '../Component/Logos/logo'



import {Menu,Sidebar, Icon, Image} from 'semantic-ui-react'




const MenuBar =(props)=>{

    const [sidebarOpened,setSidebarOpened] = useState(false)
    const [activeTab,setActiveTab] = useState()

    const customForms = [
        {text: "Custom Jewelry Inquiry", link: "/inquiry/CustomJewelry"},
        {text: "Repair Inquiry", link: "/inquiry/Repair"},
        {text: "Repurpose Jewelry Inquiry", link: "/inquiry/Repurpose"}
    ]

    const collectionCategories = categories

    // const accountLinks = props.user ? [{text:"Login",component:<LogInButton />}] : [ {text:"Sign Up",link:"/register"},{text:"Login",component:<LogInButton />}] 
    const accountLinks = props.user ? [{text:"Log Out",component:<LogInButton />}]  : [ {text:"Sign Up",link:"/register"},{text:"Log In",link:"/login"}] 


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

            <Menu.Item onClick={()=> setSidebarOpened(true)} compact="true">
                    <Icon name='sidebar'  size="large"/>
            </Menu.Item>
            <Menu.Item as={Link} to="/" name="Home">
                 <Image src={logoSVG} size="tiny"/>
            </Menu.Item>
            
            <Menu.Menu position="right" compact="true">
                <SearchBarContainer />
                     <ShoppingCartComponent />
            </Menu.Menu>




            </>
       )
    }
   

    const pcMenu = ()=>{
        return(
            <>
            <Menu.Item className={props.mobile?"mobile-menu-bar-link":"menu-bar-link"} as={Link} to="/" name="Home"  onClick={()=>setSidebarOpened(false)} >
                        
                        <Image src={logoSVG}  size="tiny"/>
                </Menu.Item>
                <Menu.Item>
                    {MenuItems()}
                </Menu.Item>
              
                <Menu.Menu position="right">
                    <Menu.Item>
                        <SearchBarContainer />
                    </Menu.Item>
                    <ShoppingCartComponent />
                <DropdownComponent title="Account" items={accountLinks} name="Account" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />



                </Menu.Menu>
                
            </>
        )
    }


    const MenuItems = () => {
       return ( 

             <>

                    {/* <Menu.Item className={props.mobile?"mobile-menu-bar-link":"menu-bar-link"} as={Link} to="/" name="Home"  onClick={()=>setSidebarOpened(false)} >
                        {props.mobile?    "Home":
                        <Image src={logoSVG}  size="mini"/>
                    }
                    </Menu.Item> */}
                
                    <DropdownComponent title="Collections" items={collectionCategories} name="Collections" setActive={setActiveTab} active={activeTab} setSidebarOpen={setSidebarOpened}/>
                 
                    <DropdownComponent title="Custom Work Inquiry" items={customForms} name="Custom Work Inquiry" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />
                    {props.user? <Menu.Item> {props.user}</Menu.Item> : null}
                   
                    {props.mobile?
                        <DropdownComponent title="Account" items={accountLinks} name="Account" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />
                    :
                    null}
               
            </>
       )
    }




    return (
<>
            <Menu  id="primary-menu-bar" 
        //    fixed="top"
            borderless={true} 
            inverted 
            fluid  
            >
                    {props.mobile? mobileDropdown():pcMenu()}
            </Menu>

    </>
    )
}

export default MobileContextConsumer(UserContextConsumer(MenuBar))