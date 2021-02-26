import React, {useState} from 'react'
import {Loader} from 'semantic-ui-react'



const SmoothLoadingImage = (props)=>{
    const [imageLoaded,setImageLoaded]= useState(false)


    return(
        <>
            <img
             {...props} 
             style={imageLoaded? {transition: "opacity 1s"} :{opacity:0}}

             onLoad={()=>setImageLoaded(true)}
             />
             {imageLoaded? null: <Loader active inline="centered"/>}

             </>

       
    )
}


export default SmoothLoadingImage