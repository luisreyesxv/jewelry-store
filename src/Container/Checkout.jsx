import React,{useState,useEffect,useCallback} from 'react'
import {Grid,Container, Button, Accordion, Icon, Card} from 'semantic-ui-react'

import CartContextConsumer from '../Context/CartContextConsumer'
import debounce from 'lodash.debounce'

import CartComponents from '../Component/Checkout/Cart'
import OrderSummary from '../Component/Checkout/OrderSummary'





const CheckoutContainer = (props)=>{

    useEffect(()=>{
        document.title= "Checkout -"+ process.env.REACT_APP_TITLE
        checkout() },[])

    const [cartFinalized, setCartFinalized] = useState(true)   
    const [activeAccordion,setActiveAccordion] = useState("cart") 
    const [shipping, setShipping] = useState({street:"",city: "", state: "", country: "", zip: ""})   
    const [billing, setBilling] = useState({street:"",city: "", state: "", country: "", zip: ""})   

    const checkout=()=>{
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
        .then(response => response.json())
        .then(itemsObj =>  createItems(itemsObj))
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
                    <Grid.Column width="9">
                        <Accordion fluid styled className="checkout-accordion"> 
                            <Accordion.Title active={activeAccordion==="cart"}  onClick={()=>activeAccordion==="cart"?setActiveAccordion("none"):setActiveAccordion("cart")} >
                               <h2>
                                   <Icon name="dropdown"/>
                                   Cart
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="cart"}>
                                <CartComponents cart={props.cart}   cartFinalized={cartFinalized} setCartFinalized={setCartFinalized} changeCart={props.changeCart} setActiveAccordion={setActiveAccordion}/>
                            </Accordion.Content>
                            <Accordion.Title active={activeAccordion==="shipping"}  onClick={()=>activeAccordion==="shipping"?setActiveAccordion("none"):setActiveAccordion("shipping")} >
                                <h2>
                                    <Icon name="dropdown"/>
                                    Shipping
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="shipping"}>
                                Shipping Form
                            </Accordion.Content>
                            <Accordion.Title active={activeAccordion==="billing"}  onClick={()=>activeAccordion==="billing"?setActiveAccordion("none"):setActiveAccordion("billing")} >
                                <h2>
                                    <Icon name="dropdown"/>
                                    Billing
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="billing"}>
                                Billing Form
                            </Accordion.Content>
                            <Accordion.Title active={activeAccordion==="CC"}  onClick={()=>activeAccordion==="CC"?setActiveAccordion("none"):setActiveAccordion("CC")} >
                                <h2>
                                    <Icon name="dropdown"/>
                                    Credit Card Information
                                </h2>
                            </Accordion.Title>
                            <Accordion.Content active={activeAccordion==="CC"}>
                                Stripe Card Form
                            </Accordion.Content>
                            
                    </Accordion>
                    </Grid.Column>
                    <Grid.Column width="6"  style={{background:"green"}}>
                        <OrderSummary cart={props.cart} />
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        </Container>

    )
}

export default CartContextConsumer(CheckoutContainer)
