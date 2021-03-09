import React,{useState} from 'react'
import {Container,Form, Button, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import UserContextConsumer from '../../Context/UserContextConsumer'




const LogIn =(props)=>{
    const [login,setLogin]= useState({email:"",password:""})
    const [error,setError]= useState({status:false, message: "Please make sure both fields are filled in"})


   const onSubmitHandler =()=>{
       if(login.email && login.password){
           loggingIn()
       }
       else errorHandler("Please make sure both fields are filled in")
   }

   const errorHandler=(message)=>{
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
          .then(response=> response.json())
          .then(userObject =>{
            props.login(userObject)
    
          })
        }


        




    return(
            <Container text>
                    <Form onSubmit={onSubmitHandler} error={error.status}>
                        <Form.Field>
                            <label> Email</label>
                            <input name ="email" type="email" placeholder="example@email.com" value={login.email} onChange={onChangeHandler}/>
                        </Form.Field>
                        <Form.Field>
                            <label> password</label>
                            <input name="password" type="password" placeholder="password" value={login.password} onChange={onChangeHandler}/>
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                        <Button as={Link} to="/register" >register Account</Button>

                        <Message error header="Error" content={error.message}/>

                    </Form>
            </Container>
    )
}


export default UserContextConsumer(LogIn)