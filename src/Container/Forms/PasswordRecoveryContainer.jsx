import React from 'react'
import {Route,Switch, Redirect, Link} from 'react-router-dom'

import FormContainer from './FormContainer'
import PasswordRecoveryForm from '../../Component/PasswordRecovery/PasswordRecoveryForm'
import UserContextConsumer from '../../Context/UserContextConsumer'
import CompletePasswordRecoveryForm from '../../Component/PasswordRecovery/CompletePasswordRecoveryForm'


const PasswordRecoveryContainer = (props) =>{

    const renderPageComponents =()=>{

        return(
            <Switch >
                <Route exact path={`${props.match.url}/`}  render={()=><PasswordRecoveryForm />} />
                <Route path={`${props.match.url}/:token`}  render={(routerProps)=> <CompletePasswordRecoveryForm />} />



            </Switch>
            
        )
    }

    const alreadyLoggedIn=()=>{
        return(
                        <>
                            <h2> You are already logged in.</h2>
                            <h1><Link to="/"> Click here to go back Home</Link></h1>
                        </>
            )       
    }
    

    return (
        props.user? alreadyLoggedIn() : renderPageComponents() 
    )

}







export default FormContainer(UserContextConsumer(PasswordRecoveryContainer))