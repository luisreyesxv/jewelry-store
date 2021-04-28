import React,{useState} from 'react'
import {Link} from 'react-router-dom'





const InquiryListItem =(props)=>{
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
        <div className="inquiryListCard" style={{backgroundImage: props.img}}>
        
                   <div style={{lineHeight:"25vh"}}>
                   <div >{ props.categoryName}</div>
                  
                   </div>



        </div>
        </Link>
    )
}


export default InquiryListItem