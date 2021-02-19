import React from 'react'
import {Route,Switch} from 'react-router-dom'

import HomePage from './HomePage'
import ItemsContainer from './ItemsContainer'



const RoutesContainer = ()=>{


return (
    <>
    <Switch>
            <Route exact path="/items" render ={(routerProps)=><ItemsContainer/>} />
            <Route  path="/"  render={(browserProps)=> <HomePage {...browserProps}/>}/>
                
    </Switch>
    </>
)

}


export default RoutesContainer