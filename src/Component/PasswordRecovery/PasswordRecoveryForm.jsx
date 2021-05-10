import React, {useState} from 'react'
import {Form, Button, Message, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'





const PasswordRecoveryForm = (props)=>{

    const [email,setEmail]= useState({email:"",emailConfirmation: ""})
    const [error,setError]= useState({status:false, message: "Please make sure all fields are filled in"})
    const [loading,setLoading]= useState(false)
    const [complete,setComplete] = useState(false)

    const onChangeHandler=(e)=>{
        e.preventDefault()
        setError({...error,status:false})
        setEmail({...email,
            [e.target.name]:e.target.value})
    }

    const onSubmitHandler =()=>{
        if(!(email.email && email.emailConfirmation)){
         //    
         errorHandler("Please make sure all fields are filled in")
        }
        else if(email.email !== email.emailConfirmation){
            errorHandler("Email confirmation field must equal the Email field")
        }
        else{
             setLoading(true)
             recoverPassword()
        }
    }

    const errorHandler=(message)=>{
        setLoading(false)
        setError({status:true, message: message})
        setEmail({email: "", emailConfirmation: ""})
    
       }

       const successHandler = ()=>{
           setLoading(false)
           setComplete(true)

       }

       const recoverPassword =()=>{

        const body = {password_recovery:{
              email: email.email
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
    
    
          fetch(process.env.REACT_APP_API_URL+"password/forgot",options)
          .then(response=> {
            if(!response.ok){
                throw new Error(response.status)
             }
              else return response.json()})
          .then(userObject =>{
              successHandler()
          })
          .catch(errorMessage=>{
            const errorResponseMessage = errorMessage.message==="400"? "Email Address not found. Please check and try again." : "There was a problem with recovering the password. Please try again later."
            errorHandler(errorResponseMessage)
          })
        }

       



return (
        <>
            <Header as="h2" textAlign="center" >
               Forgot Password
            </Header>
            <Form loading={loading} size="large" className="log-in-register-form" onSubmit={onSubmitHandler} error={error.status}>
                    <Form.Input  
                    className="log-in-register-form-label" 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    value={email.email}
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
                    placeholder="Re-enter Email Address"
                    value={email.emailConfirmation}
                    onChange={onChangeHandler}
                    icon ="user circle"
                    iconColor="green"
                    iconPosition="left"
                    />  
                
                <Button type="submit">Reset Password</Button>
                <Message error header="Error" content={error.message}/>


            </Form>
                <Message success hidden={!complete} header="Success" content="An email with details on how to recover your password has been successfully sent."/>
            <Message>
                Already have an account? 
                <Link to="/login" style={{fontWeight:"bolder"}}> Log-in </Link>
            </Message>
        </>



    
    )


}

export default PasswordRecoveryForm