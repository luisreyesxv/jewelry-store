import React from 'react'
import MobileContext from './MobileContext'


const MobileContextConsumer =(Component)=>{

    
     
    return (props)=>{

        return (
        <MobileContext.Consumer>
        {context => <Component {...props} {...context} />}
        </MobileContext.Consumer>
        )
    }

    
}

export default MobileContextConsumer
