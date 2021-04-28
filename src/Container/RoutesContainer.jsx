import React from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'



import HomePage from './HomePage/HomePage'
import ItemsContainer from './ItemsContainer'
import Normal404Page from '../Component/404/Normal404Page'
import LogIn from './Forms/LogIn'
import Register from './Forms/Register'
import PasswordRecoveryContainer from './Forms/PasswordRecoveryContainer'
import CheckoutContainer from './Checkout'
import InquiryContainer from './Inquiry/Inquiry'
import CollectionsContainer from './Collections/CollectionsContainer'





const RoutesContainer = ()=>{


return (
     <Switch> 
            <Route exact path="/items/:slug" render ={(routerProps)=><ItemsContainer/>} />
            <Route path="/inquiry" render={(browserProps)=> <InquiryContainer {...browserProps}/>} />
            <Route path="/collections/:category" render={(browserProps)=> <CollectionsContainer />} />
            <Route path="/account" render={(browserProps)=> "Account"} />
            <Route path="/About" render={(browserProps)=> "About Us"} />
            <Route path="/LogIn" render={(browserProps)=> <LogIn />} />
            <Route path="/Register" render={(browserProps)=> <Register />} />
            <Route path="/PasswordRecovery" render={(browserProps)=> <PasswordRecoveryContainer {...browserProps}/>} />
            <Route path="/checkout" render={(browserProps)=> <CheckoutContainer />} />




            
            <Route  exact path="/"  render={(browserProps)=> <HomePage {...browserProps}/>}/>
            <Route exact path='*' render ={(browserProps)=> <Normal404Page  {...browserProps}/>} />
                
     </Switch>
)

}


export default RoutesContainer