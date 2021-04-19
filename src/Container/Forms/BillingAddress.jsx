import React, {useState} from "react"
import {Form, Button, Checkbox} from 'semantic-ui-react'



// import {countries} from '../../Component/countries'



const BillingAddress =(props)=>{
    const [error,setError] = useState()

    const submitHandler = () =>{
        const {firstName, lastName, street,city, state, zip} = props.address.billing
        if(firstName && lastName && street && city && state && zip){
            props.setActiveAccordion("CC")
        }
        else setError(true)
    }


    const changeHandler = ( event)=>{
            
        event?.preventDefault()
        setError()
                props.setAddress({...props.address,
                    billing: {...props.address.billing,
                        [event.target.name]:event.target.value}
                    })

    }

    const sameAsBilling = ()=>{
        if(props.address.billing.sameShipping){
            props.setAddress( {...props.address,
                billing: {sameShipping: false, firstName: "", lastName: "",street:"",city: "", state: "", country: "", zip: ""} })
        }
        else {
            setError()
            props.setAddress( {...props.address,
                billing: {...props.address.shipping, sameShipping: true} })
        }
    }

    return(
    <>
        <Checkbox checked={props.address.billing.sameShipping} label= "Same as Shipping Address?" onClick={sameAsBilling}/>
        
        <Form  widths="equal" onSubmit={submitHandler} className="page-container-grid">
            <Form.Group widths="equal" >
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            disabled={props.address.billing.sameShipping}
                            value={props.address.billing.firstName}
                            onChange={changeHandler}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            disabled={props.address.billing.sameShipping}
                            value={props.address.billing.lastName}
                            onChange={changeHandler}
                            icon ="address book"
                            iconPosition="left"
                            /> 
            </Form.Group>
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="Street"
                            name="street"
                            type="text"
                            placeholder="Street Name and Number"
                            disabled={props.address.billing.sameShipping}
                            value={props.address.billing.street}
                            onChange={changeHandler}
                            icon ="address book"
                            iconPosition="left"
                            />  
            <Form.Group widths="equal">
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="City"
                            name="city"
                            type="text"
                            placeholder="City"
                            disabled={props.address.billing.sameShipping}
                            value={props.address.billing.city}
                            onChange={changeHandler}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="State"
                            name="state"
                            type="text"
                            placeholder="State"
                            disabled={props.address.billing.sameShipping}
                            value={props.address.billing.state}
                            onChange={changeHandler}
                            icon ="address book"
                            iconPosition="left"
                            />
            </Form.Group>
                            
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="Postal Code"
                            name="zip"
                            type="text"
                            placeholder="Enter Postal Code"
                            disabled={props.address.billing.sameShipping}
                            value={props.address.billing.zip}
                            onChange={changeHandler}
                            icon ="address book"
                            iconPosition="left"
                            />      

                            <Button disabled={error} fluid className={error?"checkout-cart-incomplete-button":"checkout-cart-success-button"} type="submit" >
                                
                                {error? "Please Fill All Fields" : "Confirm Billing Address"}
                                
                            </Button>

                        </Form>
    </>
                    
    )



}




export default BillingAddress