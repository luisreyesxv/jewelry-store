import React from 'react'
import {Grid,Container} from 'semantic-ui-react'


const OrderSummary = (props)=>{
    const totalPriceReducer=(previous,current)=> previous+ (current.price * current.quantity)
    const totalTaxReducer=(previous,current)=> previous+ (current.price * current.quantity * 0.08875)

    let sum = props.cart.reduce(totalPriceReducer,0)
    let tax = props.cart.reduce(totalTaxReducer,0)
    let shipping = props.cart.length? 25:0;

  


    

   



    return (
        <Container >
            <Grid container >
                <Grid.Row>
                    <h1 >Order Summary</h1>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width="8">
                        Items Total:
                    </Grid.Column  >
                    <Grid.Column  width="8">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(sum)}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width="8">
                        Shipping & Handling:
                    </Grid.Column  >
                    <Grid.Column  width="8">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(shipping)}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width="8">
                        Estimated tax:
                    </Grid.Column  >
                    <Grid.Column  width="8">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(tax)}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width="8">
                        <h3> Total: </h3>
                    </Grid.Column  >
                    <Grid.Column  width="8">
                    <h3>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(sum+tax+shipping) } </h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}


export default OrderSummary