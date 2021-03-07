import React,{useState} from 'react'
import {Link} from 'react-router-dom'





const HomePageCategory =(props)=>{
    const [hovered,setHovered]= useState(false)



    return (
        <Link as="div" to={`/collections/${props.categoryName}`}
        
        style={
            hovered?
            {textDecoration:"white underline"}
        :
        null
        }
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        >
        <div className="homepageCategoryCard" style={{backgroundImage: props.img}}>
        
                   <div style={{lineHeight:"20vh"}}>
                   <div >{ props.categoryName}</div>
                  
                   </div>



        </div>
        </Link>
    )
}


export default HomePageCategory