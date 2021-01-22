import React from 'react'
import UserContextConsumer from '../Context/UserContextConsumer'



const ItemsContainer =(props)=>{
   
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
    
    
          fetch("http://localhost:3000/api/v1/login",options)
          .then(response=> response.json())
          .then(userObject =>{
    
            localStorage.setItem("user",JSON.stringify(userObject))
            props.login(userObject.email)
    
          })


    }

    return (
        <>
        "This is the item page swag swag swag"
        <p> {props.user}</p>
        <button onClick={()=>props.login(loggingIn)} />
        </>
    )
}

export default UserContextConsumer(ItemsContainer)

