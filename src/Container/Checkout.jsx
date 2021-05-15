import React,{useState,useEffect,useCallback} from 'react'
import {Link} from 'react-router-dom'
import ReactGA from 'react-ga'

import {Grid,Container, Button, Accordion, Icon} from 'semantic-ui-react'
import {Elements, StripeProvider} from 'react-stripe-elements'

import CartContextConsumer from '../Context/CartContextConsumer'
import UserContextConsumer from '../Context/UserContextConsumer'

import debounce from 'lodash.debounce'

import CartComponents from '../Component/Checkout/Cart'
import OrderSummary from '../Component/Checkout/OrderSummary'
import PurchaseModal from '../Component/Checkout/PurchaseModal'
import LogInModal from '../Component/Checkout/LogInModal'

import CCPaymentForm from '../Component/Checkout/CCPaymentForm'
import ShippingAddress from './Forms/ShippingAddress'
import BillingAddress from './Forms/BillingAddress'







const CheckoutContainer = (props)=>{

    useEffect(()=>{
        document.title= "Checkout -"+ process.env.REACT_APP_TITLE
        checkout() },[])

    const [cartFinalized, setCartFinalized] = useState(true)   
    const [activeAccordion,setActiveAccordion] = useState("cart") 
    const [token,setToken] = useState()
    const [ address, setAddress]= useState({shipping:{firstName: "", lastName: "", street:"",city: "", state: "", zip: ""}, billing: {sameShipping: false, firstName: "", lastName: "",street:"",city: "", state: "", zip: ""} }) 
    const [success,setSuccess] = useState()
    const [unAuthorized,setUnAuthorized] = useState(!props.user)


    const googleAnalytics=({type, message })=>{
        ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)

        ReactGA.event({
            category: type,
            action: message
            })
        
    }
    const checkout=()=>{
        googleAnalytics({type:"Checkout", message: "They are attempting to make a purchase" })
        const body ={orders: {items: props.cart}}
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              credentials: 'include',
              body: JSON.stringify(body)
            }
        fetch(process.env.REACT_APP_API_URL + "checkout" , options)
        .then(response => {if(!response.ok){
            throw new Error(response.status)
         }
          else return response.json()})
        .then(itemsObj =>  createItems(itemsObj))
        .catch(()=> setUnAuthorized(true))
    }

    const purchase = ()=>{
        setSuccess("loading")
        const body = {orders:{
            token: token,
            shipping: address.shipping
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

            fetch(process.env.REACT_APP_API_URL + "checkout/purchase" , options)
            .then(response => {if(!response.ok){
                throw new Error(response.status)
             }
                else return response.json()
            })
             .then(messageResponse => {
                purchaseSuccess() 
             })
             .catch(()=> setSuccess("failure"))




    }

    const purchaseSuccess = (itemsObject)=>{
        props.changeCart({instruction: "delete_all"})
        setSuccess("success")
        setAddress({shipping:{firstName: "", lastName: "", street:"",city: "", state: "", zip: ""}, billing: {sameShipping: false, firstName: "", lastName: "",street:"",city: "", state: "", zip: ""} })
        setToken()




    }

    const debouncedFunction = useCallback(debounce(checkout,2000),[cartFinalized])

    useEffect(()=>{
        if(cartFinalized){
            debouncedFunction()
        }

        return debouncedFunction.cancel
          
    },[cartFinalized,debouncedFunction]) 


    const createItems = (items)=>{
        const cart=  items.map(itemElement=> {
            const material = itemElement.material
          return({
            name: itemElement.item.name,
            slug: itemElement.item.slug,
            material: material,
            image: itemElement.item.extra[material].images[0],
            price: itemElement.item.price,
            id: itemElement.item.extra[material].id,
            quantity: itemElement.quantity
        })
        })

    props.changeCart({instruction: "replace_all", replacementCart: cart})  
    }

    return(
        
        <Container className="page-container-grid">
            <Grid  verticalAlign="top" className="page-container-grid" centered={true} stackable={true}>
                <Grid.Row>
                    <h1 >Checkout</h1>
                </Grid.Row>
                <Grid.Row columns="4" >
                    <Grid.Column width="12">
                        <Accordion fluid styled className="checkout-accordion"> 
                            <Accordion.Title active={activeAccordion==="cart"} >
                               <h2>
                                   <Icon name="dropdown"/>
                                   Cart
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="cart"}>
                                <CartComponents cart={props.cart}   cartFinalized={cartFinalized} setCartFinalized={setCartFinalized} changeCart={props.changeCart} setActiveAccordion={setActiveAccordion}/>
                            </Accordion.Content>
                            <Accordion.Title active={activeAccordion==="shipping"} >
                                <h2>
                                    <Icon name="dropdown"/>
                                    Shipping
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="shipping"}>
                                <ShippingAddress address={address} setAddress={setAddress} setActiveAccordion={setActiveAccordion}/>
                            </Accordion.Content>
                            <Accordion.Title active={activeAccordion==="billing"} >
                                <h2>
                                    <Icon name="dropdown"/>
                                    Billing
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="billing"}>
                                <BillingAddress address={address} setAddress={setAddress} setActiveAccordion={setActiveAccordion}/>
                            </Accordion.Content>
                            <Accordion.Title active={activeAccordion==="CC"}  >
                                <h2>
                                    <Icon name="dropdown"/>
                                    Credit Card Information
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="CC"}>
                                    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY} >
                                        <Elements 
                                            >

                                            <CCPaymentForm  setActiveAccordion={setActiveAccordion} setToken={setToken}/>
                                        </Elements>
                                    </StripeProvider>


                            </Accordion.Content>

                            <Accordion.Content active={activeAccordion==="complete" && props.user}>
                            <Button.Group fluid>
                                <Button id="checkout-cart-finalize-button"   onClick={()=>setActiveAccordion("cart")}>
                                    Restart
                                </Button>
                                {props.cart.length >0?
                                        <>
                                                    <Button.Or />
                                        
                                                <Button className="shopping-cart-button" onClick={()=>purchase()}>
                                                    Confirm Payment
                                                </Button>
                                        </>
                                : null}
                            </Button.Group>
                            </Accordion.Content>

                            <Accordion.Content active={!props.user}>
                            <Button.Group fluid>
                                
                                <Button as={Link} to="/LogIn" className="shopping-cart-button">
                                    Need to Login to Purchase
                                </Button>
                            </Button.Group>
                            </Accordion.Content>
                            
                    </Accordion>
                    </Grid.Column>
                    <Grid.Column width="4" id="order-summary">
                        <OrderSummary cart={props.cart} />
                    </Grid.Column>
                </Grid.Row>
                
                
            </Grid>
            <PurchaseModal status={success} setSuccess={setSuccess} user={props.user} googleAnalytics={googleAnalytics}/>
            <LogInModal status={unAuthorized}  googleAnalytics={googleAnalytics}/>
        </Container>

    )
}

export default CartContextConsumer(UserContextConsumer (CheckoutContainer))
