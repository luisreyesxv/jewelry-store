import React from 'react'
import {Card, Image, Grid, Icon, Popup} from 'semantic-ui-react'

import materialColors from '../Materials/MaterialButtons'



const ItemCard=(props)=>{
    const metaDescriptions =()=>{
        return props.materials.map((element)=> (
            <>
           <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          {Math.floor(Math.random() * (2) )?  <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          : null}
          {Math.floor(Math.random() * (2) )?  <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          : null}
          {Math.floor(Math.random() * (2) )?  <Card.Content key={props.name+" "+element.name}> <Icon title ={element.name} size="small" name="circle thin" style={{color:materialColors[element.name]}} /> </Card.Content>
          : null}
            
          </>
        ))
        
    }


    return(
        <Card >
            <Image size="medium" src={props.images[0].image_url} />
            <Card.Header className="showcaseCardHeader">{props.name}</Card.Header>
            <Grid centered>
                <Grid.Row centered columns="equal" >
                {/* <Card.Content meta className="showcaseCardMeta">
                    {props.categories[0].name}
                    </Card.Content> */}
                    {metaDescriptions()}
                    
                </Grid.Row>
            </Grid>
            <Card.Content> {props.name}</Card.Content>


        </Card>
    )
}

export default ItemCard