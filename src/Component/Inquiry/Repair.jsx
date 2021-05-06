import React, {useState, useEffect} from 'react'
import {Form, Button, Message, Image, Header} from 'semantic-ui-react'




const Repair = (props)=>{
    const [inquiry,setInquiry]= useState({firstName: "", lastName: "", email:"", description: ""})

    const [error,setError]= useState({status:false, message: "Please make sure all fields are filled in"})
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        document.title= "Repair Inquiry -"+ process.env.REACT_APP_TITLE },[])



    const changeHandler=(e, data)=>{
        
        e.preventDefault()
        setError({...error,status:false})
        setSuccess(false)

        setInquiry({...inquiry,
            [data.name]: data.value})
    }

    const submitHandler=()=>{
        
        setError({...error,status:false})

        const {firstName, lastName, email, description} = inquiry

        if(firstName && lastName && email  && description){
            setSuccess(true)
            props.submitForm(inquiry, "Repair")
            setInquiry({firstName: "", lastName: "", email:"", description: ""})
        }
        else setError({...error,status: true})
    }

    return (

        <>
            <Form  size="large" className="log-in-register-form" onSubmit={submitHandler} error={error.status}>
                <Header as="h2" textAlign="center" id="inquiry-header">
                    Repair Inquiry
                </Header>

                <Message  size="mini">
                Fill Out this form to get a free quote for repair work on your jewelry. Please include a clear photo of the item you want to replace (if possible), and as many details as possible.
              
                </Message>

                <Form.Group >
                    
                    <Form.Input 
                        required={true}
                        className="log-in-register-form-label" 
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={inquiry.firstName}
                        onChange={changeHandler}
                        icon ="user circle"
                        iconPosition="left"
                        />  
                    <Form.Input  
                       required={true}
                        className="log-in-register-form-label" 
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={inquiry.lastName}
                        onChange={changeHandler}
                        icon ="user circle"
                        iconPosition="left"
                        />

                </Form.Group>

                <Form.Input  
                       required={true}
                        className="log-in-register-form-label" 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={inquiry.email}
                        onChange={changeHandler}
                        icon ="mail"
                        iconColor="green"
                        iconPosition="left"
                        />
                
               
                <Form.TextArea 
                        required={true}
                        className="log-in-register-form-label" 
                        label="Description"
                        name="description"
                        
                        placeholder="Please provide as many details you have about this jewelry you want repaired and any reference images you may have."
                        value={inquiry.description}
                        onChange={changeHandler}
                        icon ="idea"
                        iconPosition="left"
                        /> 

                <Button disabled={error.status} fluid className={error?"checkout-cart-incomplete-button":"checkout-cart-success-button"} type="submit" >
                    submit
                </Button>

                <Message error={true} visible={error.status} header="Error" content={error.message}>
                        Inquiry Email has been sent. A copy has been sent over to your email.
                </Message>


                <Message success={true} visible={success} header="Success" content="Inquiry Email has been sent. A copy has been sent over to your email." />
                        
            </Form>
        </>
    )
}


export default Repair