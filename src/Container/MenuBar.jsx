import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import UserContextConsumer from '../Context/UserContextConsumer'
import MobileContextConsumer from '../Context/MobileContextConsumer'
import DropdownComponent from '../Component/Menu/DropdownComponent'
import ShoppingCartComponent from '../Component/Menu/ShoppingCart'
import SearchBarContainer from './SearchBarContainer'

import logoSVG from '../Component/Logos/logo'



import {Menu, Button, Grid,Segment,Sidebar, Icon, Image} from 'semantic-ui-react'




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
                    <Icon name='sidebar'  size="large"/>
            </Menu.Item>
            <Menu.Item as={Link} to="/" name="Home">
                 <Image src={logoSVG} size="tiny"/>
            </Menu.Item>
            <Menu.Item position="right">
                <SearchBarContainer />
            </Menu.Item>
            <Menu.Menu position="right" compact>
                
                <Menu.Item >
                     <ShoppingCartComponent />
                </Menu.Item>
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
                {/* </Grid.Column> */}
                {/* <Grid.Column> */}
                <Menu.Menu position="right">
                    <Menu.Item>
                        <SearchBarContainer />
                    </Menu.Item>
                    <ShoppingCartComponent />
                <DropdownComponent title="Account" items={[{text:"Login",link:"/account"}]} name="Account" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />



                </Menu.Menu>
                {/* <Menu.Item >
                     <ShoppingCartComponent />
                </Menu.Item> */}
                {/* </Grid.Column> */}
                
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
               
                {/* <Menu.Item className={props.mobile?"mobile-menu-bar-link":"menu-bar-link"}> Luis</Menu.Item> */ }
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
                    {props.mobile?
                    <DropdownComponent title="Account" items={[{text:"Login",link:"/account"}]} name="Account" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />
                    :
                    null}
               
            </>
       )
    }

{/* <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    {_.map(leftItems, (item) => (
      <Menu.Item {...item} />
    ))}
    <Menu.Menu position="left">
      {_.map(rightItems, (item) => (
        <Menu.Item {...item} />
      ))}
    </Menu.Menu>
  </Menu> */}


    return (
<>
        {/* <Segment basic> */}
            <Menu  id="primary-menu-bar" 
        //    fixed="top"
            borderless={true} 
            inverted 
            // compact={props.mobile?true:false} 
            fluid  
            // widths={props.mobile?null:"6" }
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