import React, {useState, useEffect} from 'react'
import {Form, Button, Message, Header} from 'semantic-ui-react'




const CustomJewelry = (props)=>{
    const [inquiry,setInquiry]= useState({firstName: "", lastName: "", email:"", budget: "", diamond: "", material:"", description: ""})

    const [error,setError]= useState({status:false, message: "Please make sure all fields are filled in"})
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        document.title= "Custom Jewelry Inquiry -"+ process.env.REACT_APP_TITLE },[])



    const materials = [
        {key:"gold", value: "gold", text: "Gold"},
        {key:"copper", value: "copper", text: "Copper"},
        {key:"silver", value: "silver", text: "Silver"},
        {key:"platinum", value: "platinum", text: "Platinum"}
        ]
 

    const changeHandler=(e, data)=>{
        
        e.preventDefault()
        setError({...error,status:false})
        setSuccess(false)

        setInquiry({...inquiry,
            [data.name]: data.value})
    }

    const submitHandler=()=>{
        
        setError({...error,status:false})

        const {firstName, lastName, email, budget, diamond, material, description} = inquiry

        if(firstName && lastName && email && budget && diamond && material && description){
            setSuccess(true)
            props.submitForm(inquiry, "CustomWork")
            setInquiry({firstName: "", lastName: "", email:"", budget: "", diamond: "", material:"", description: ""})
        }
        else setError({...error,status: true})
    }

    return (

        <>
            <Form  size="large" className="log-in-register-form" onSubmit={submitHandler} error={error.status}>
                <Header textAlign="center" id="inquiry-header" >
                    Custom Jewelry Inquiry
                </Header>

                <Message  size="mini">
                Fill Out this form to get a free quote to create the custom jewelry design that is right for you.
                <br/>
                <b> Note that quotes will typically start around $1,250.00 </b>
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
                <Form.Input  
                       required={true}
                        className="log-in-register-form-label" 
                        label="Budget"
                        name="budget"
                        type="number"
                        min="1250"
                        step="any"
                        placeholder="$1,250.00 is the minimum"
                        value={inquiry.budget}
                        onChange={changeHandler}
                        icon ="currency"
                        iconColor="green"
                        iconPosition="left"
                        />
                <Form.Dropdown  
                       required={true}
                        className="log-in-register-form-label" 
                        label="Material"
                        name="material"
                        selection={true}
                        placeholder="Select a Material"
                        options={materials}
                        value={inquiry.material}
                        onChange={changeHandler}
                        icon ="dropdown"
                        iconPosition="left"
                        />

               
                <Form.TextArea 
                        required={true}
                        className="log-in-register-form-label" 
                        label="Diamond Info"
                        name="diamond"
                        
                        placeholder="Do you want diamonds? Please list desired clarity, weight, and cut"
                        value={inquiry.diamond}
                        onChange={changeHandler}
                        icon ="diamond"
                        iconPosition="left"
                        /> 
                <Form.TextArea 
                        required={true}
                        className="log-in-register-form-label" 
                        label="Description"
                        name="description"
                        
                        placeholder="Please provide as many details you have about this custom jewelry and any reference images you may have."
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


export default CustomJewelry