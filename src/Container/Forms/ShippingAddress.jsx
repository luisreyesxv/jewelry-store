import React,{useState} from "react"
import {Form, Button} from 'semantic-ui-react'




const ShippingAddress =(props)=>{
    const [error,setError] = useState()


    const submitHandler = () =>{
        const {firstName, lastName, street,city, state, zip} = props.address.shipping
        if(firstName && lastName && street && city && state && zip){
            props.setActiveAccordion("billing")
        }
        else setError(true)
    }



    const changeHandler = ({countryField, event, value})=>{
            
        event?.preventDefault()


        
        setError()
         
                if(props.address.billing.sameShipping){
                    props.setAddress({...props.address,
                        shipping: {...props.address.shipping,
                            [event.target.name]:event.target.value},
                        billing: {...props.address.billing,
                            [event.target.name]:event.target.value}
                        })
                }
                else {
                props.setAddress({...props.address,
                    shipping: {...props.address.shipping,
                        [event.target.name]:event.target.value}
            
                    
                    })
            }
    }

    return(
        
        <Form widths="equal" onSubmit={submitHandler} className="page-container-grid">
            <Form.Group widths="equal">
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={props.address.shipping.firstName}
                            onChange={(event)=> changeHandler( {event:event})}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={props.address.shipping.lastName}
                            onChange={(event)=> changeHandler( {event:event})}
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
                            value={props.address.shipping.street}
                            onChange={(event)=> changeHandler( {event:event})}
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
                            value={props.address.shipping.city}
                            onChange={(event)=> changeHandler( {event:event})}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="State"
                            name="state"
                            type="text"
                            placeholder="State"
                            value={props.address.shipping.state}
                            onChange={(event)=> changeHandler( {event:event})}
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
                            value={props.address.shipping.zip}
                            onChange={(event)=> changeHandler( {event:event})}
                            icon ="address book"
                            iconPosition="left"
                            />      

                            <Button disabled={error} fluid className={error?"checkout-cart-incomplete-button":"checkout-cart-success-button"} type="submit" >
                                
                                {error? "Please Fill All Fields" : "Confirm Shipping Address"}
                                
                            </Button>

                        </Form>
                    
    )



}




export default ShippingAddress