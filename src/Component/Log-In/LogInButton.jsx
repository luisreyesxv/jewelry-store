import React from 'react'
import {Link} from 'react-router-dom'
import UserContextConsumer from '../../Context/UserContextConsumer'






const LogInButton =(props)=>{
    const logInOrLogOut=()=>{

        return(
            props.user? <span onClick={()=>props.loggingOut() } >Log Out</span>  : <Link style={{color:"black"}} to="/LogIn"> Log In </Link>
    
    
        )
    }


return (
    logInOrLogOut()

)

}











export default UserContextConsumer(LogInButton)