import React from 'react'

import {Container,Grid,Placeholder, Table} from 'semantic-ui-react'




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

    const table = ()=>{
        const dictionary = {
            earrings: [
                ["Diameter:", "3/8 inches"],
                ["Weight:", "1.4 grams"],
                ["Backing:", "Post/Clutch"]

            ],
            necklace: [
                ["Width:", "1.2 inches"],
                ["Height:", "3 inches"],
                ["Clasp", "Fold Over"]

            ],
            grill: [
                ["Width:", "1/2 inches"],
                ["Length:", "1 3/5 inches"]
            ],
            ring:[
                ["Ring Width:", "3.70 mm"],
                ["Ring Fit:", "Gallery Fit"]
            ],
            watch:[
                ["Strap Width:", "22mm:"],
                ["Glass:", "Sapphire Coated Crystal"],
                ["Water Resistance:", "5 ATM"]
            ]
        }


        const tableRows = dictionary[props.item?.category]?.map( row =>{
            return(

                <Table.Row>
                                <Table.Cell>
                                    <strong>{row[0]}</strong>

                                </Table.Cell>
                                <Table.Cell>
                                    {row[1]}
                                </Table.Cell>
                </Table.Row>
            )
        })

        return(
                <Table basic="very"  striped={true} size="small">
                    <Table.Body>
                    
                        <Table.Row>
                            <Table.Cell>
                                <strong>Material:</strong>
                            </Table.Cell>
                            <Table.Cell>
                                {props.materialPicked.toUpperCase()}
                            </Table.Cell>
                        </Table.Row>
                        {tableRows}
                    </Table.Body>




                </Table>


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
            <Grid.Row>
                
                {table()}
                
            </Grid.Row>
        </Grid.Column>
    )
}


export default ItemsDetails