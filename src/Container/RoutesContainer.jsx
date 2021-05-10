import React from 'react'
import {Route,Switch} from 'react-router-dom'

import LoadingScreen from '../Component/LoadingScreen'


const HomePage = React.lazy(() => import('./HomePage/HomePage'))
const ItemsContainer = React.lazy(()=> import(  './ItemsContainer'))
const Normal404Page = React.lazy(()=> import( '../Component/404/Normal404Page'))
const LogIn = React.lazy(()=> import( './Forms/LogIn'))
const Register = React.lazy(()=> import( './Forms/Register'))
const PasswordRecoveryContainer = React.lazy(()=> import(  './Forms/PasswordRecoveryContainer'))
const CheckoutContainer = React.lazy(()=> import(  './Checkout'))
const InquiryContainer = React.lazy(()=> import( './Inquiry/Inquiry'))
const CollectionsContainer = React.lazy(()=> import( './Collections/CollectionsContainer'))







const RoutesContainer = ()=>{


return (
     <React.Suspense fallback={<LoadingScreen />} >
     <Switch> 
            <Route exact path="/items/:slug" render ={(routerProps)=><ItemsContainer/>} />
            <Route path="/inquiry" render={(browserProps)=> <InquiryContainer {...browserProps}/>} />
            <Route path="/collections/:category" render={(browserProps)=> <CollectionsContainer />} />
            <Route path="/About" render={(browserProps)=> "About Us"} />
            <Route path="/LogIn" render={(browserProps)=> <LogIn />} />
            <Route path="/Register" render={(browserProps)=> <Register />} />
            <Route path="/PasswordRecovery" render={(browserProps)=> <PasswordRecoveryContainer {...browserProps}/>} />
            <Route path="/checkout" render={(browserProps)=> <CheckoutContainer />} />
            <Route path="/loading" render={(browserProps)=> <LoadingScreen />} />




            
            <Route  exact path="/"  render={(browserProps)=> <HomePage {...browserProps}/>}/>
            <Route exact path='*' render ={(browserProps)=> <Normal404Page  {...browserProps}/>} />
                
     </Switch>
  </React.Suspense> 
)

}


export default RoutesContainer