import React, {useState} from 'react'
import {CardNumberElement, CardExpiryElement, CardCVCElement, CardElement, injectStripe} from 'react-stripe-elements'
import {Form, Button, Message} from 'semantic-ui-react'

const CCPaymentForm = (props)=>{
    const [errorMessage,setErrorMessage] = useState()

     const submitHandler =(event)=>{
        event.preventDefault()

        const { stripe } = props


        
            stripe?.createToken()
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
        // <Form  onSubmit={submitHandler} className="page-container-grid">
        //     <Form.Field  width="16" className="log-in-register-form-label" >
        //         <CardElement style={{base: { backgroundColor: "white", fontSize: "1.5rem"}}} onsubmit={submitHandler}/>
        //     </Form.Field>
        //     <Button fluid className="shopping-cart-button" type="submit" >Confirm CC Information</Button>
        //  </Form>

    )
}





export default injectStripe(CCPaymentForm)