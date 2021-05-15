import React, {useState} from 'react'
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements'
import {Form, Button, Message} from 'semantic-ui-react'

const CCPaymentForm = (props)=>{
    const [errorMessage,setErrorMessage] = useState()

     const submitHandler =(event)=>{
        event.preventDefault()

        const { stripe } = props


        
            stripe?.createToken( {
                    name: "Luis Reyes",
                    address_line1: "22 Hemlock Street",
                    address_city: "Brooklyn",
                    address_state: "New York",
                    address_zip: "11208",
                    address_country: "US"
                }


            )
            .then(payload=>{
                if(payload.error){
                    setErrorMessage(payload.error.message)
                }
                else{
                    props.setToken(payload.token.id)
                    props.setActiveAccordion("complete")
                }
        })
      
    


    }




    return(
        <>
        <Message key="Explanation" visible={true} warning header="Explanation" content={"Though this form does use Stripe as a CC processor, this is currently being used inside the Test environment. Providing real CC information will have it being sent to Stripe to verify the card, no charges will actually occur. For the sake of testing the processor, you can use the CC number '4242 4242 4242 4242' followed by any current card expiration date and made up CVC to see it work, as well."} />
        <Form widths="equal" onSubmit={(event,{value})=>submitHandler(event,value)} className="page-container-grid">
            <Form.Field  className="log-in-register-form-label" >
                 <label>Card Number</label>
                 <CardNumberElement onChange={()=>setErrorMessage()} style={{base: { backgroundColor: "white", fontSize: "1.5rem"}}}/>
            </Form.Field>
            <Form.Group>
                 <Form.Field  className="log-in-register-form-label" >
                     <label>Card Expiry</label>
                     <CardExpiryElement onChange={()=>setErrorMessage()} style={{base: { backgroundColor: "white", fontSize: "1.5rem"}}}/>
                 </Form.Field>
                 <Form.Field  className="log-in-register-form-label" >
                     <label>Card CVC</label>
                     <CardCVCElement onChange={()=>setErrorMessage()} style={{base: { backgroundColor: "white", fontSize: "1.5rem"}}}/>
                 </Form.Field>

            </Form.Group>

            <Button fluid className="shopping-cart-button" type="submit" >Confirm CC Information</Button>
            <Message key="CCErrorMessage" visible={errorMessage} error header="Error" content={errorMessage} />
             

         </Form>
        
         </>

    )
}





export default injectStripe(CCPaymentForm)