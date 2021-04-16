import React,{useState,useEffect,useCallback} from 'react'
import {Grid,Container, Button} from 'semantic-ui-react'

import CartContextConsumer from '../Context/CartContextConsumer'
import debounce from 'lodash.debounce'

import ShoppingCartItem from '../Component/ShoppingCart/ShoppingCartItem'
import OrderSummary from '../Component/Checkout/OrderSummary'





const CheckoutContainer = (props)=>{

    useEffect(()=>{
        document.title= "Checkout -"+ process.env.REACT_APP_TITLE
        console.log("this ran")
                    checkout()
            },[])

    const [cartFinalized, setCartFinalized] = useState(true)       

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


    const mappingCartItems = ()=>{
        return props.cart.map(item =>{
            return(
                <Grid.Row>
                    < ShoppingCartItem key={`checkout ${item.slug} - ${item.material}`}  {...item} item={item} changeCart={props.changeCart} disabled={cartFinalized}/>
                </Grid.Row>
                    
            )
        })
    }


    return(
        
        <Container className="page-container-grid">
            <Grid  verticalAlign="top" className="page-container-grid" centered={true} stackable={true}>
                <Grid.Row>
                    <h1 >Checkout</h1>
                </Grid.Row>
                <Grid.Row columns="4" >
                    <Grid.Column width="9">
                        <Grid container>
                                {mappingCartItems()}
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width="6"  style={{background:"green"}}>
                        <OrderSummary cart={props.cart} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Button id="shopping-cart-button" fluid={true}  onClick={()=>setCartFinalized(!cartFinalized)}>
                         {cartFinalized? "Edit Cart" : "Finalize Cart"}
                    </Button>
                </Grid.Row>
            </Grid>
        </Container>

    )
}

export default CartContextConsumer(CheckoutContainer)
