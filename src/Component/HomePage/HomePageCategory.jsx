import React,{useState} from 'react'
import {Link} from 'react-router-dom'





const HomePageCategory =(props)=>{
    const [hovered,setHovered]= useState(false)



    return (
        <Link as="div" to={props.link}
        
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
                   <div >{ props.text}</div>
                  
                   </div>



        </div>
        </Link>
    )
}


export default HomePageCategory