import React from "react"
import {Form, Button, Checkbox} from 'semantic-ui-react'



import {countries} from '../../Component/countries'



const BillingAddress =(props)=>{

    return(
    <>
        <Checkbox checked={props.billing.sameShipping} label= "Same as Shipping Address?" onClick={props.sameAsBilling}/>
        
        <Form  widths="equal" onSubmit={()=>props.setActiveAccordion("CC")} className="page-container-grid">
            <Form.Group widths="equal" >
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            disabled={props.billing.sameShipping}
                            value={props.billing.firstName}
                            onChange={(event)=> props.formChangeHandlers({form:"billing", event:event})}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input  
                            className="log-in-register-form-label" 
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            disabled={props.billing.sameShipping}
                            value={props.billing.lastName}
                            onChange={(event)=> props.formChangeHandlers({form:"billing", event:event})}
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
                            disabled={props.billing.sameShipping}
                            value={props.billing.street}
                            onChange={(event)=> props.formChangeHandlers({form:"billing", event:event})}
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
                            disabled={props.billing.sameShipping}
                            value={props.billing.city}
                            onChange={(event)=> props.formChangeHandlers({form:"billing", event:event})}
                            icon ="address book"
                            iconPosition="left"
                            /> 
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="State"
                            name="state"
                            type="text"
                            placeholder="State"
                            disabled={props.billing.sameShipping}
                            value={props.billing.state}
                            onChange={(event)=> props.formChangeHandlers({form:"billing", event:event})}
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
                            disabled={props.billing.sameShipping}
                            value={props.billing.country}
                            onChange={(event,{value})=> props.formChangeHandlers({form:"billing", event:value, countryField:true})}
                            icon ="address book"
                            iconPosition="left"
                            />
                            <Form.Input   
                            className="log-in-register-form-label" 
                            label="Postal Code"
                            name="zip"
                            type="text"
                            placeholder="Enter Postal Code"
                            disabled={props.billing.sameShipping}
                            value={props.billing.zip}
                            onChange={(event)=> props.formChangeHandlers({form:"billing", event:event})}
                            icon ="address book"
                            iconPosition="left"
                            />      

                            <Button fluid className="shopping-cart-button" type="submit" >Confirm Billing Address</Button>

                        </Form>


    </>
                    
    )



}




export default BillingAddress