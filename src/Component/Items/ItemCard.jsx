import React,{useState} from 'react'
import { Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import materialColors from '../Materials/MaterialButtons'
import SmoothLoadingImage from '../SmoothLoadingImage'



const ItemCard=(props)=>{

    const [materialPicked,setMaterialPicked]= useState(props.materials[0].name)
    
    const changeMaterial =(e)=>{
       e.preventDefault()
        setMaterialPicked(e.target.dataset.name)
    }

    const itemURL= `/items/${props.slug}?material=${materialPicked}`



    const metaDescriptions =()=>{  
            return props.materials.map((element,index)=> {
                                    if(index===4){
                                        return (
                                                <Link to={itemURL} title= "see more styles" >
                                                        <div className ="itemCardMaterialsButton" style={{border: "none",fontWeight: "bold"}}  key={props.name+" more button"} >
                                                            See More
                                                        </div>
                                                </Link>
                                        )
                                    }
                                    else if (index <4){
                                        return (
                                                
                                                    <div 
                                                    key={props.name+" "+element.name}
                                                    title= {element.name}
                                                    data-name={element.name}
                                                    className ="itemCardMaterialsButton" 
                                                    style={
                                                        {backgroundColor: materialColors[element.name],
                                                        opacity: materialPicked=== element.name? "50%":null}} 
                                                        onClick={changeMaterial}  
                                                        />
                                        )
                                        
                                    }
                            }
            )
        
    }


    return(
        <div className="itemCard" >
            <div className="itemCardImageContainer" >
                <Link to={itemURL} >
                    <SmoothLoadingImage     
                        className="itemImage" 
                        src={props.extra[materialPicked].images[0]}
                    />
                </Link>
            </div>
            <Link className="itemCardHeader"  to={itemURL}>
                {props.name}
            </Link>
            <div className="itemCardPrice">{"$"+parseFloat(props.price).toFixed(2)}</div>
            <div className="itemCardMaterials"  >         
                    {metaDescriptions()}               
            </div>
        </div>
    )
}

export default ItemCard


// <Card className="itemCard" title={props.name} fluid style={{background:"red"}}>
//                 <Image as={Link} to={"items/"+props.slug} size="medium" src={props.images[0].image_url} />
//             <Grid centered>
//                 <Grid.Row  >
            
//                     {metaDescriptions()}
                    
//                 </Grid.Row>
//             </Grid>
//             <Grid>
//                 <Grid.Row>
//                     <Grid.Column width="10" floated="left">
//                         <Card.Content className="itemCardHeader">{props.name}</Card.Content>
//                     </Grid.Column>
                  
//                      <Grid.Column width="6" floated="right">
//                     <Card.Content textAlign="right" verticalAlign="top" className="itemCardPrice"> {"$"+parseFloat(props.price).toFixed(2)} </Card.Content>
//             </Grid.Column>

//                 </Grid.Row>
//             </Grid>
            
            

//         </Card>