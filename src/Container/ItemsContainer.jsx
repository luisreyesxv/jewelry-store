import React from 'react'
import UserContextConsumer from '../Context/UserContextConsumer'



const ItemsContainer =(props)=>{
   

    return (
        <>
        "This is the item page swag swag swag"
        <p> {props.user}</p>
        <button onClick={()=>props.login("butthole")} />
        </>
    )
}

export default UserContextConsumer(ItemsContainer)

