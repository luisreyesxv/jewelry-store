import React from 'react'
import {useHistory} from 'react-router-dom'
import CartContextConsumer from '../../Context/CartContextConsumer'


import {Grid,Placeholder, Divider, Button} from 'semantic-ui-react'

import materialColors from '../Materials/MaterialButtons'



const ItemsBasicInfo = (props)=>{
    const history = useHistory()

    const title = ()=>{
        return(
           <h1>{ props.item.name} </h1>
        )
    }

    const placeholderTitle=()=>{
        return(
            <Placeholder >
                <Placeholder.Header >
                    <Placeholder.Line as="h1" length="full" />
               </Placeholder.Header>

            </Placeholder>
        )
    }
    const metaDescriptions =()=>{  
        return props.item.materials.map((element)=> {
                                
                                    return (
                                            
                                                <div 
                                                key={props.name+" "+element.name}
                                                title= {element.name}
                                                data-name={element.name}
                                                className ="itemCardMaterialsButton" 
                                                style={
                                                    {backgroundColor: materialColors[element.name],
                                                    opacity: props.materialPicked=== element.name? "50%":null}} 
                                                    onClick={()=> props.setMaterial(element.name)}  
                                                    />
                                    )
                                    
                                
                        }
        )
    
}


    const price=()=>{
        const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'});
        if(props.item){

            return currencyFormat.format(props.item.price)
        }
        else{
            return(
                <Placeholder >
                    <Placeholder.Line  length="full" />
                    <Placeholder.Line  length="full" />


            </Placeholder>
            )
        }

        
    }


    const cartOnClick =({e,now=false})=>{
        e.preventDefault()
        props.changeCart(
            {instruction:"add",
        cartItem: {
            name: props.item.name,
            slug:props.item.slug,
            material: props.materialPicked,
            image: props.item?.extra[props.materialPicked].images[0],
            price: props.item.price,
            id: props.item?.extra[props.materialPicked].id
        }}

        )

        if (now){
            history.push('/checkout')
        }


    }


    return (

            <Grid stackable={true} >
                <Grid.Row centered="true">
                    <Grid.Column>
                        {props.item? title(): placeholderTitle()}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered="true">
                    <Grid.Column>
                       <em>
                       {props.item?.detail}
                           </em> 
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                
                    <Grid.Column>
                        <div className="itemCardPrice">

                        {price()}
                        </div>
                    </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row textAlign="center">
                    <Grid.Column>
                        <Button.Group fluid>
                            <Button color="green" onClick={e=>cartOnClick({e:e})}>Add to Cart</Button>
                            <Button.Or/>
                            <Button color="orange" onClick={e=>cartOnClick({e:e, now:"true"})}> Buy Now</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>
                <Divider  fitted={true}/>
                <Grid.Row >
                        
                                <Grid.Column  width="8">
                                    <h3>Materials </h3>
                                </Grid.Column>
                                <Grid.Column>

                                    <h4>
                                        <em>
                                            {props.materialPicked?.toUpperCase()}
                                        </em>
                                    </h4>
                                </Grid.Column>
                </Grid.Row>
                
                <Grid.Row > 
                    <Grid.Column textAlign="center">
                        <div className="itemCardMaterials"  >         
                            {props.item? metaDescriptions():null}       
                        </div>
                    </Grid.Column>
                
                
                </Grid.Row>
                
            </Grid>
    )
}

export default CartContextConsumer(ItemsBasicInfo)