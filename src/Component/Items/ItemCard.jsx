import React,{useState} from 'react'
import {Card, Button, Grid, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import materialColors from '../Materials/MaterialButtons'
import SmoothLoadingImage from '../SmoothLoadingImage'



const ItemCard=(props)=>{

    const [materialPicked,setMaterialPicked]= useState(props.materials[0].name)
    

    const changeMaterial =(e,object)=>{
       e.preventDefault()
        setMaterialPicked(object.["data-name"])
    }

    const itemURL= `items/${props.slug}?material:${materialPicked}`



    const metaDescriptions =()=>{
        return props.materials.map((element)=> (
            <>
           {/* <Card.Content key={props.name+" "+element.name}> */}
                <Button compact disabled={materialPicked=== element.name} key={props.name+" "+element.name} title ={element.name} size="small" icon="square" data-name={element.name} style={{backgroundColor:"transparent",color:materialColors[element.name]}} onClick={changeMaterial}/> 
                {/* </Card.Content> */}
          {/* { Math.floor(Math.random() * (2) )?  <Button  disabled={materialPicked=== "silver"} key={props.name+" silver"} title ={element.name} size="small" icon="square" data-name={"silver"} style={{backgroundColor:"transparent",color:materialColors[element.name]}} onClick={changeMaterial}/>
          : null}  */}
          
          {/* {Math.floor(Math.random() * (2) )?   <Button  disabled={materialPicked=== "silver"} key={props.name+"silver"} size="small" icon="circle thin" data-name={"silver"} style={{color:materialColors["silver"]}} onClick={changeMaterial} data-name={"silver"} />
          : null}
             */}
          </>
        ))
        
    }


    return(
        // <Card className="itemCard" title={props.name+" "+ materialPicked} >
        //         <Image as={Link} to={itemURL} size="medium" src={props.images[0].image_url} />
        //     {/* <Card.Header> */}
        //     <Grid centered>
        //     <Grid.Row  >
            
        //     {metaDescriptions()}
            
        // </Grid.Row>
       
        //             <Grid.Column width="15" floated="left">
        //                 <Card.Content className="itemCardHeader" as={Link} to={itemURL}>{props.name}</Card.Content>
        //             </Grid.Column>
        //             <Grid.Column width="15" floated="right">
        //                 <Card.Content textAlign="right" verticalalign="top" className="itemCardPrice"> {"$"+parseFloat(props.price).toFixed(2)} </Card.Content>
        //             </Grid.Column>

                
        //     </Grid>
            
            
            
            

        // </Card>


        <div className="itemCard" >
            {/* <ul className="itemCardUi" > */}
            <div className="itemCardImageContainer" >
            <Link to={itemURL} >
                <SmoothLoadingImage

               
                className="itemImage" 
                src={props.images[0].image_url}
                
                />

            </Link>
            </div>
            
                    <Link className="itemCardHeader"  to={itemURL}>
                        {/* {props.name.length>20? props.name.slice(0,16)+"...": props.name} */}
                        {props.name}
                        </Link>
                    <div className="itemCardPrice">{"$"+parseFloat(props.price).toFixed(2)}</div>
                    <div className="itemCardMaterials"  >
            
                 {metaDescriptions()}
                
             </div>
            {/* </div> */}
                {/* luis
            </ul> */}
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