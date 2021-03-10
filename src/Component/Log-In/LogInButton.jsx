import React from 'react'
import {Link} from 'react-router-dom'
import UserContextConsumer from '../../Context/UserContextConsumer'






const LogInButton =(props)=>{
    const logInOrLogOut=()=>{

        return(
            // props.user? <span onClick={()=>props.logout() } >Log Out</span> : <span onClick={()=>loggingIn()} >  Log In </span>
            props.user? <span onClick={()=>props.logout() } >Log Out</span>  : <Link style={{color:"black"}} to="/LogIn"> Log In </Link>
    
    
        )
    }



    const loggingIn =()=>{

        const body = {user:{
                email: "testing@email.com",
                password: "fakefakefake"
            }
        }

        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(body)
          }
    
    
          fetch(process.env.REACT_APP_API_URL+"login",options)
          .then(response=> response.json())
          .then(userObject =>{
            props.login(userObject)
    
          })
        }

return (
    logInOrLogOut()

)

}











export default UserContextConsumer(LogInButton)