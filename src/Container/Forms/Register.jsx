import React,{useState,useEffect} from 'react'
import {Form, Button, Message, Image, Header} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'

import UserContextConsumer from '../../Context/UserContextConsumer'
import FormContainer from './FormContainer'
import logoSVG from '../../Component/Logos/logo'




const Register =(props)=>{
    const [account,setAccount]= useState({firstName:"", lastName:"",email:"",password:"",passwordConfirmation:""})
    const [error,setError]= useState({status:false, message: "Please make sure all fields are filled in"})
    const [loading,setLoading]= useState(false)


    useEffect(()=>{
        document.title="Register New Account - "+ process.env.REACT_APP_TITLE

         }     ,[])


   const onSubmitHandler =()=>{
       if(!(account.email && account.firstName && account.lastName && account.password && account.passwordConfirmation)){
        //    
        errorHandler("Please make sure all fields are filled in")
       }
       else if(account.password !== account.passwordConfirmation){
           errorHandler("Password Confirmation must match Password")
       }
       else if(account.password.length<6 || account.password.length>20){
        errorHandler("Password must be between 6-20 characters")
       }
       else{
            setLoading(true)
            registeringAccount()
       }
   }

   const errorHandler=(message)=>{
    setLoading(false)
    setError({status:true, message: message})
    setAccount({...account,password:"",passwordConfirmation:""})

   }

   const onChangeHandler=(e)=>{
    e.preventDefault()
    setError({...error,status:false})
    setAccount({...account,
        [e.target.name]:e.target.value})
}

    const registeringAccount =()=>{

        const body = {user:{
              password: account.password,
              email: account.email,
               name: account.firstName + " " + account.lastName 
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
    
    
          fetch(process.env.REACT_APP_API_URL+"register",options)
          .then(response=> {
            if(!response.ok){
                throw new Error(response.status)
             }
              else return response.json()})
          .then(userObject =>{
              setLoading(false)
              props.login(userObject)
          })
          .catch(errorMessage=>{
            const errorResponseMessage = errorMessage.message==="401"? "Email already in use. Please select another email or try logging in instead." : "There was a problem with registering an account. Please try again later."
              setError({status:true, message: errorResponseMessage})
              setLoading(false)
          })
        }

        const renderPageComponents=()=>{



            return(
           <>
                    <Header as="h2" textAlign="center" >
                        <Image src={logoSVG}  size="massive"/> Register New Account
                    </Header>
                    
                    <Form loading={loading} size="large" className="log-in-register-form" onSubmit={onSubmitHandler} error={error.status}>
                        <Form.Group widths="equal">
                            <Form.Input  
                                className="log-in-register-form-label" 
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="Enter First Name"
                                value={account.firstName}
                                onChange={onChangeHandler}
                                /> 

                                <Form.Input  
                                className="log-in-register-form-label" 
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder="Enter Last Name"
                                value={account.lastName}
                                onChange={onChangeHandler}                    
                                /> 
                            </Form.Group>
                            
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

                            <Button type="submit">Register Account</Button>
                            <Message error header="Error" content={error.message}/>

                        </Form>
                    <Message>
                        Already have an account? 
                        <Link to="/login" style={{fontWeight:"bolder"}}> Log-in </Link>
                        </Message>
          </>

            )
        }


        




    return(
        props.user? <Redirect to="/" /> :renderPageComponents()

    )
}


export default FormContainer( UserContextConsumer(Register))