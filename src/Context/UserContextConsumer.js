import React from 'react'
import UserContext from './UserContext'


const UserContextConsumer =(Component)=>{

    


    // const context = useContext(UserContext)
     
    return (props)=>{

        return (
        <UserContext.Consumer>
        {context => <Component {...props} {...context} />}
        </UserContext.Consumer>
        )
    }

    
}

export default UserContextConsumer
