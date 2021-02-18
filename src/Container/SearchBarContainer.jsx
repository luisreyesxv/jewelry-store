import React,{useState} from 'react'
import MobileContextConsumer from '../Context/MobileContextConsumer'


import {Search,Menu, Button, Container,Segment,Sidebar, Icon, Image} from 'semantic-ui-react'



const SearchBarContainer =(props)=>{

    const [searchSidebarOpened,setSearchSidebarOpened] = useState(false)


    const mobileComponent =()=>{
        return  (
            <>
            <Sidebar 
            as={Menu}
            id="sidebar-main-menu"
            animation = "overlay"
            direction="right"
            inverted = {true}
            onHide ={()=>setSearchSidebarOpened(false)}
            vertical = {true}
            visible={searchSidebarOpened}
            >
                <Menu.Item>
                    <Search size="small"/>
                </Menu.Item>
            </Sidebar>
    
    
            <Menu.Item position ="right" onClick={()=> setSearchSidebarOpened(true)} >
                <Icon name="search" size="large" />
            </Menu.Item>
    
        </>
        )
    }

    const pcComponent = () =>{
        return <Search size="mini" />
    }

return (
    props.mobile?mobileComponent():pcComponent()
)

   
}


export default MobileContextConsumer(SearchBarContainer)
