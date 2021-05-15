import React, {useState} from 'react'
import {Form, Button, Message, Header} from 'semantic-ui-react'
import {Link, useParams} from 'react-router-dom'

import UserContextConsumer from '../../Context/UserContextConsumer'





const CompletePasswordRecoveryForm = (props)=>{

    const [account,setAccount]= useState({email:"",emailConfirmation: "",password:"" , passwordConfirmation: ""})
    const [error,setError]= useState({status:false, message: "Please make sure all fields are filled in"})
    const [loading,setLoading]= useState(false)
    const [complete,setComplete] = useState(false)

    const {token} = useParams()

    const onChangeHandler=(e)=>{
        e.preventDefault()
        setError({...error,status:false})
        setAccount({...account,
            [e.target.name]:e.target.value})
        setComplete(false)
    }

    const onSubmitHandler =()=>{
        if(!(account.email && account.emailConfirmation && account.password && account.passwordConfirmation)){
         errorHandler("Please make sure all fields are filled in")
        }
        else if(account.email !== account.emailConfirmation){
            errorHandler("Email fields must match")
        }
        else if(account.password !== account.passwordConfirmation){
            errorHandler("Password fields must match")
        }
        else if (account.password.length < 6 || account.password.length >20){
            errorHandler("Password must be between 6-20 characters")
        }
        else{
             setLoading(true)
             recoverPassword()
        }
    }

    const errorHandler=(message)=>{
        setLoading(false)
        setError({status:true, message: message})
        setAccount({...account, emailConfirmation: "", password: "", passwordConfirmation: ""})
    
       }

       const successHandler = (userObject)=>{
           setLoading(false)
           setComplete(true)
           setAccount({email:"",emailConfirmation: "",password:"" , passwordConfirmation: ""})
           props.login(userObject)


       }

       const recoverPassword =()=>{

        const body = {password_recovery:{
              email: account.email,
              password: account.password,
              token: token
            }
        }

        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(body)
          }
    
    
          fetch(process.env.REACT_APP_API_URL+"password/reset",options)
          .then(response=> {
            if(!response.ok){
                throw new Error(response.status)
             }
              else return response.json()})
          .then(userObject =>{
              successHandler(userObject)

          })
          .catch(errorMessage=>{
              let errorResponseMessage;

              if(errorMessage.message==="422") errorResponseMessage = "There was an issue with creating password. Please make sure the password is follows the correct format"
              else if(errorMessage.message==="404")  errorResponseMessage ="Link not valid or has expired. Try generating a new link."
              else errorResponseMessage ="There was a problem with recovering the password. Please try again later."

            errorHandler(errorResponseMessage)
          })
        }

       



return (
<>
            <Header as="h2" textAlign="center" >
                 Complete Password Reset
            </Header>
    <Form loading={loading} size="large" className="log-in-register-form" onSubmit={onSubmitHandler} error={error.status}>
                
            <Form.Input  
            className="log-in-register-form-label" 
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email Address"
            value={account.email}
            onChange={onChangeHandler}
            icon ="user circle"
            iconColor="green"
            iconPosition="left"
            />  
            <Form.Input  
            className="log-in-register-form-label" 
            label="Email Confirmation"
            name="emailConfirmation"
            type="email"
            placeholder="Re-Enter Email Address"
            value={account.emailConfirmation}
            onChange={onChangeHandler}
            icon ="user circle"
            iconColor="green"
            iconPosition="left"
            />  
            <Form.Group widths="equal">
                <Form.Input   
                className="log-in-register-form-label" 
                label="Password"
                name="password"
                type="password"
                placeholder="6-20 characters"
                value={account.password}
                onChange={onChangeHandler}
                icon ="lock"
                iconPosition="left"
                />   

                <Form.Input   
                    className="log-in-register-form-label" 
                    label="Password Confirmation"
                    name="passwordConfirmation"
                    type="password"
                    placeholder="6-20 characters"
                    value={account.passwordConfirmation}
                    onChange={onChangeHandler}
                    icon ="lock"
                    iconPosition="left"
                /> 
            </Form.Group>

            <Button type="submit">Reset Password</Button>
            <Message error header="Error" content={error.message}/>

 

    </Form>
    <Message color="green" hidden={!complete} >
        <Message.Header> Success</Message.Header>
        <Message.Content> 
            Password has been successfully reset.
        </Message.Content>
        <Message.Content>
            <Link to="/">Click Here to Go Home</Link>
        </Message.Content>
    </Message>
    <Message>
        Already have an account? 
        <Link to="/login" style={{fontWeight:"bolder"}}> Log-in </Link>
    </Message>
</>



    
    )


}

export default UserContextConsumer(CompletePasswordRecoveryForm)