import React from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'

import HomePage from './HomePage'
import ItemsContainer from './ItemsContainer'
import Normal404Page from '../Component/404/Normal404Page'



const RoutesContainer = ()=>{


return (
    <>
    <Switch>
            <Route exact path="/items" render ={(routerProps)=><ItemsContainer/>} />
            <Route exact path='/404' render ={(browserProps)=> <Normal404Page />} />
            
            <Route  exact path="/"  render={(browserProps)=> <HomePage {...browserProps}/>}/>
            <Redirect to="/404" />
                
    </Switch>
    </>
)

}


export default RoutesContainer