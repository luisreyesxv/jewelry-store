import React,{useContext, useEffect} from 'react'
import UserContext from '../Context/UserContext'
import UserContextConsumer from '../Context/UserContextConsumer'
import {Segment} from 'semantic-ui-react'




const HomePage =(props)=>{
    
    useEffect(()=>{
        // props.login("The original username")
    },[props])

    return (
        <Segment basic>
        "This is the home page swag swag swag"
        <p> {props.user}</p>
        </Segment>
    )
}

export default UserContextConsumer(HomePage)

