import React,{useState, useEffect} from 'react'
import UserContextConsumer from '../Context/UserContextConsumer'
import MobileContextConsumer from '../Context/MobileContextConsumer'
import DropdownComponent from '../Component/Menu/DropdownComponent'
import {Link} from 'react-router-dom'



import {Menu, Button, Container,Segment,Sidebar, Icon, Accordion} from 'semantic-ui-react'




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


            </>


       )




    }

    const MenuItems = () => {
       return ( 
             <>
                    <Menu.Item as={Link} to="/" name="Home"  onClick={()=>setSidebarOpened(false)}> Home</Menu.Item>

                    <DropdownComponent title="Collections" items={collectionCategories} name="Collections" setActive={setActiveTab} active={activeTab} setSidebarOpen={setSidebarOpened}/>
                   
                    <DropdownComponent title="Custom Work Inquiry" items={customForms} name="Custom Work Inquiry" setActive={setActiveTab}  active={activeTab} setSidebarOpen={setSidebarOpened} />
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
<>
        <Segment basic>
            <Menu  id="primary-menu-bar" 
            fixed="top"
            size = "large"
            basic
            
            borderless={true} 
            inverted       
            >
                <Container >
                    {props.mobile? mobileDropdown():MenuItems()}
                    
                    

                    
                </Container>

            </Menu>
        </Segment>

    </>
    )
}

export default MobileContextConsumer(UserContextConsumer(MenuBar))