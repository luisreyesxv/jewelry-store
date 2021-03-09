import React,{useState} from 'react'
import UserContextConsumer from '../../Context/UserContextConsumer'




const LogIn =(props)=>{
    const [email,setEmail]= useState("")
    const [password,setPassword] = useState("")

    // email: "testing@email.com",
    //             password: "fakefakefake"

    const loggingIn =()=>{

        const body = {user:{
                email: email,
                password: password
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




    return(

        process.env.REACT_APP_API_URL
    )
}


export default UserContextConsumer(LogIn)