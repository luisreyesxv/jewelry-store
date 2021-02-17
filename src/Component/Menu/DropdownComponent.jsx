import React,{useState} from 'react'
import MobileContextConsumer from '../../Context/MobileContextConsumer'


// import {Menu, Button, Container,Segment,Sidebar, Icon, Dropdown} from 'semantic-ui-react'
import {Accordion,Dropdown, Menu, Icon, Transition} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const DropDownComponent =(props)=>{

    

    const changeActive=()=> props.setActive(props.name=== props.active? "":props.name)

    const pcComponent = () => {

        return(
        <Dropdown item className="menu-bar-link"  text={props.title} >
                        <Dropdown.Menu className="menu-bar-link" >
                            {props.items.map((element)=> <Dropdown.Item className="menu-bar-link" key={"dropdown "+ element.text +" option"}  as={Link} to={element.link}  onClick={()=> props.setSidebarOpen(false)}> {element.text}</Dropdown.Item>)}
                        </Dropdown.Menu>
        </Dropdown>
        )
    }

    const mobileComponent = () =>{

        return (
            <Accordion  as={Menu.Item} className="mobile-menu-bar-link" >
                <Accordion.Title className="mobile-menu-bar-link" as={Menu.Item} active={props.name=== props.active} onClick={changeActive}>
                    <>
                        {props.title} 
                        <Icon name='dropdown' />
                    </>
                </Accordion.Title>
                <Transition visible={props.name=== props.active} animation='slide down' duration={150} >
                <Accordion.Content as={Menu.Item} active={props.name=== props.active}>
                    {props.items.map((element)=> <Menu.Item className="mobile-menu-bar-link" key={"accordion "+ element.text +" option"} as={Link} to={element.link} onClick={()=> props.setSidebarOpen(false)}> {element.text}</Menu.Item>) }
                </Accordion.Content>
                </Transition>
            </Accordion>

        )
    }


    



    return (
        <>
         {props.mobile? mobileComponent():pcComponent()}

         </>
    )
    
}


export default MobileContextConsumer(DropDownComponent)

