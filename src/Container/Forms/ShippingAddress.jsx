import React from "react"
import {Form, Button} from 'semantic-ui-react'



import {countries} from '../../Component/countries'



const ShippingAddress =(props)=>{

    return(
        
        <Form widths="equal" onSubmit={()=>props.setActiveAccordion("billing")} className="page-container-grid">
            <Form.Group widths="equal">
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={props.shipping.firstName}
                            onChange={(event)=> props.formChangeHandlers({form:"shipping", event:event})}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={props.shipping.lastName}
                            onChange={(event)=> props.formChangeHandlers({form:"shipping", event:event})}
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
                            value={props.shipping.street}
                            onChange={(event)=> props.formChangeHandlers({form:"shipping", event:event})}
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
                            value={props.shipping.city}
                            onChange={(event)=> props.formChangeHandlers({form:"shipping", event:event})}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="State"
                            name="state"
                            type="text"
                            placeholder="State"
                            value={props.shipping.state}
                            onChange={(event)=> props.formChangeHandlers({form:"shipping", event:event})}
                            icon ="address book"
                            iconPosition="left"
                            />
            </Form.Group>
                            <Form.Select
                            options={countries}
                            className="log-in-register-form-label" 
                            label="Country"
                            name="country"
                            type="text"
                            placeholder="Country"
                            value={props.shipping.country}
                            onChange={(event,{value})=> props.formChangeHandlers({form:"shipping", event:value, countryField:true})}
                            icon ="address book"
                            iconPosition="left"
                            />
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="Postal Code"
                            name="zip"
                            type="text"
                            placeholder="Enter Postal Code"
                            value={props.shipping.zip}
                            onChange={(event)=> props.formChangeHandlers({form:"shipping", event:event})}
                            icon ="address book"
                            iconPosition="left"
                            />      

                            <Button fluid className="shopping-cart-button" type="submit" >Confirm Shipping Address</Button>

                        </Form>
                    
    )



}




export default ShippingAddress