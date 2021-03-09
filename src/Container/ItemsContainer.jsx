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
    
    
          fetch(process.env.REACT_APP_API_URL+"login",options)
          .then(response=> response.json())
          .then(userObject =>{
            props.login(userObject)
    
          })


    }

    return (
        <>
        "This is the item page swag swag swag"
        <p> {props.user}</p>
        <button onClick={loggingIn} />
        </>
    )
}

export default UserContextConsumer(ItemsContainer)

