import React from 'react'

import {Container,Grid,Placeholder} from 'semantic-ui-react'




const ItemsDetails =(props)=>{

    const placeholderHeader =()=>{
        return(
        <Placeholder>
            <Placeholder.Header as="h1">
                <Placeholder.Line  />
            </Placeholder.Header>
        </Placeholder>
        )
    }

    const description =()=>{

        return(
            <p>
                {props.item.description}
            </p>
        )
    }

    const placeholderDescription=()=>{
        return(

            <Placeholder>
                    <Placeholder.Paragraph>
                
                        <Placeholder.Line/>
                        <Placeholder.Line/>
                        <Placeholder.Line/>
                        <Placeholder.Line/>
                        <Placeholder.Line/>
    
                    </Placeholder.Paragraph>
            </Placeholder>
        )
    }

    return(
        <Grid.Column as={Container} text={true}>
            <Grid.Row>
               {props.item? <h2>Product Details</h2> : placeholderHeader()}
            </Grid.Row>
            <Grid.Row>
                
                {props.item? description() : placeholderDescription()}
                
            </Grid.Row>
        </Grid.Column>
    )
}


export default ItemsDetails