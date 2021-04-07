import React from 'react'
import {Route,Switch, Redirect} from 'react-router-dom'

import FormContainer from './FormContainer'
import PasswordRecoveryForm from '../../Component/PasswordRecovery/PasswordRecoveryForm'


const PasswordRecoveryContainer = (props) =>{

    

    return <Switch >
             <Route exact path={`${props.match.url}/`}  render={()=><PasswordRecoveryForm />} />
             <Route path={`${props.match.url}/:recovery`}  render={(browserRouter)=>`${props.match.url}/${browserRouter.match.params.recovery}`} />



            </Switch>


}







export default FormContainer(PasswordRecoveryContainer)