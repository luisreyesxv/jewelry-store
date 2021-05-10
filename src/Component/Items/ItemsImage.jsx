import React,{useState} from 'react'

import {Grid,Placeholder, List} from 'semantic-ui-react'

import SmoothLoadingImage from '../SmoothLoadingImage'




const ItemsImage = (props)=>{
    const [imageIndex,setImageIndex] = useState(0)

    const thumbnails = ()=>{
        return props.images.map(((image,index)=>{

            return (
                
                <List.Item active={imageIndex===index} onClick={()=> setImageIndex(index)} >
                    <SmoothLoadingImage key={"thumbnail" + index} src={image} alt={"item thumbnail #"+index} className="items-thumbnail-image"/>
                </List.Item>
               
                
            )

        }))
    }
    const placeholderThumbnails =()=>{
        return(
            <>
                    <List.Item>
                        <Placeholder >
                            <Placeholder.Image className="items-thumbnail-image"/>
                        </Placeholder>
                    </List.Item>
                    <List.Item>
                        <Placeholder >
                            <Placeholder.Image className="items-thumbnail-image"/>
                        </Placeholder>
                    </List.Item>
            </>

        )
    }



    const placeholderImage =()=>{
        return(
            <Placeholder>
                            <Placeholder.Image id="items-page-main"/>
            </Placeholder>
        )
    }




    return(

        <Grid stackable={false} columns="equal" divided>
                <Grid.Column width="4" >
                    <List selection={!!props.images}>
                        {props.images? thumbnails(): placeholderThumbnails()}
                    </List>
                </Grid.Column>
                <Grid.Column width="10"> 
                    {props.images? <SmoothLoadingImage key="main" src={props.images[imageIndex]} id="items-page-main"/> : placeholderImage()}
                </Grid.Column>
                
            </Grid>
    )
}

export default ItemsImage
