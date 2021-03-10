import React from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'



import HomePage from './HomePage/HomePage'
import ItemsContainer from './ItemsContainer'
import Normal404Page from '../Component/404/Normal404Page'
import LogIn from './LogIn'
import Register from './Forms/Register'




const RoutesContainer = ()=>{


return (
     <Switch> 
            <Route path="/items" render ={(routerProps)=><ItemsContainer/>} />
            <Route path="/inquiry" render={(browserProps)=> "Inquiry"} />
            <Route path="/collections" render={(browserProps)=> "Collections"} />
            <Route path="/account" render={(browserProps)=> "Account"} />
            <Route path="/About" render={(browserProps)=> "About Us"} />
            <Route path="/LogIn" render={(browserProps)=> <LogIn />} />
            <Route path="/Register" render={(browserProps)=> <Register />} />
            
            <Route  exact path="/"  render={(browserProps)=> <HomePage {...browserProps}/>}/>
            <Route exact path='*' render ={(browserProps)=> <Normal404Page  {...browserProps}/>} />
            {/* <Redirect to="/404" /> */}
                
     </Switch>
)

}


export default RoutesContainer