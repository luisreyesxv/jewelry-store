import React,{useContext, useEffect} from 'react'
import UserContext from '../Context/UserContext'
import UserContextConsumer from '../Context/UserContextConsumer'




const HomePage =(props)=>{
    
    useEffect(()=>{
        // props.login("The original username")
    },[props])

    return (
        <>
        "This is the home page swag swag swag"
        <p> {props.user}</p>
        </>
    )
}

export default UserContextConsumer(HomePage)

