import React,{useState,useEffect} from 'react'
import {Form, Button, Message, Image, Header} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'

import UserContextConsumer from '../../Context/UserContextConsumer'
import FormContainer from './FormContainer'





const LogIn =(props)=>{
    const [login,setLogin]= useState({email:"",password:""})
    const [error,setError]= useState({status:false, message: "Please make sure both fields are filled in"})
    const [loading,setLoading]= useState(false)


    useEffect(()=>{
        document.title="Log-In - "+ process.env.REACT_APP_TITLE

         }     ,[])


   const onSubmitHandler =()=>{
       if(login.email && login.password){
           setLoading(true)
           loggingIn()
       }
       else errorHandler("Please make sure both fields are filled in")
   }

   const errorHandler=(message)=>{
    setLoading(false)
    setError({status:true, message: message})
    setLogin({...login,password:""})

   }

   const onChangeHandler=(e)=>{
    e.preventDefault()
    setError({...error,status:false})
    setLogin({...login,
        [e.target.name]:e.target.value})
}

    const loggingIn =()=>{

        const body = {user:{
               ...login
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
    
    
          fetch(process.env.REACT_APP_API_URL+"login",options)
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
            const errorResponseMessage = errorMessage.message==="401"? "User/password combination does not exist. Please Try Again" : "There was a problem with logging in. Please try again later."
              setError({status:true, message: errorResponseMessage})
              setLoading(false)
          })
        }

        const renderPageComponents=()=>{



            return(
               <>
                    <Header as="h2" textAlign="center" >
                         Log-in to your Account
                    </Header>
                    
                        <Form loading={loading} size="large" className="log-in-register-form" onSubmit={onSubmitHandler} error={error.status}>
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter Email Address"
                            value={login.email}
                            onChange={onChangeHandler}
                            icon ="user circle"
                            iconColor="green"
                            iconPosition="left"
                            />  

                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            value={login.password}
                            onChange={onChangeHandler}
                            icon ="lock"
                            iconPosition="left"
                        />   

                            <Button type="submit">Submit</Button>
                            <Message size="mini">
                                <Link to="/passwordrecovery" style={{fontWeight:"bold"}}> Forgot Password? </Link>
                            </Message>
                            <Message error header="Error" content={error.message}/>

                        </Form>
                    {/* </Segment> */}
                    

                    <Message>
                        New Here? 
                        <Link to="/register" style={{fontWeight:"bolder"}}> Register Account </Link>
                         with us
                    </Message>
            </>
            )
        }


        




    return(
        props.user? <Redirect to="/" /> :renderPageComponents()

    )
}


export default FormContainer(UserContextConsumer(LogIn))