import React,{useState} from 'react'
import {Card} from "semantic-ui-react"
import {Link} from 'react-router-dom'





const InquiryListItem =(props)=>{

    return (


        <Card
            as={Link}
            to={props.link}
            raised
            style={{backgroundImage: props.img,backgroundSize: "100% 100%", margin: "1em"}}
        
        >
            <Card.Content className="inquiry-header"  style={{ height: "25vh", paddingTop: "50%"}}>
            { props.categoryName}
            </Card.Content>
        </Card>


        
    )
}


export default InquiryListItem