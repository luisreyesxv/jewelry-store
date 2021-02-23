import React from 'react'
import {Card, Image, Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import materialColors from '../Materials/MaterialButtons'



const ItemCard=(props)=>{
    const metaDescriptions =()=>{
        return props.materials.map((element)=> (
            <>
           <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          {/* {Math.floor(Math.random() * (2) )?  <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          : null}
          {Math.floor(Math.random() * (2) )?  <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          : null}
          {Math.floor(Math.random() * (2) )?  <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          : null} */}
            
          </>
        ))
        
    }


    return(
        <Card className="itemCard" title={props.name}>
                <Image as={Link} to={"items/"+props.slug} size="medium" src={props.images[0].image_url} />
            <Card.Header>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="10" floated="left">
                        <Card.Content className="itemCardHeader">{props.name}</Card.Content>
                    </Grid.Column>
                    {/* <Grid.Column width="6" floated="right">
                    <Card.Content textAlign="right" verticalAlign="top" className="showcaseCardPrice"> $12.99 </Card.Content>
                    </Grid.Column> */}
                     <Grid.Column width="6" floated="right">
                    <Card.Content textAlign="right" verticalAlign="top" className="itemCardPrice"> {"$"+parseFloat(props.price).toFixed(2)} </Card.Content>
            </Grid.Column>

                </Grid.Row>
            </Grid>
            </Card.Header>
            
            <Grid centered>
                <Grid.Row  >
            
                    {metaDescriptions()}
                    
                </Grid.Row>
            </Grid>

        </Card>
    )
}

export default ItemCard