import React from 'react'
import {Route,Switch, Redirect, Link} from 'react-router-dom'
import FormContainer from './Forms/FormContainer'

import Normal404Page from '../Component/404/Normal404Page'
import CustomJewelry from '../Component/Inquiry/CustomJewelry'




const InquiryContainer = (props)=>{


    const submitForm = (data, path)=>{
        const body = {inquiry:{
            ...data
         }
     }

     const options = {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
         },
         credentials: 'include',
         body: JSON.stringify(body)
       }

       fetch(process.env.REACT_APP_API_URL+"inquiry/"+path,options)
          .then(response=> response.json())
    }






    return(
            <Switch >
                <Route path={`${props.match.url}/CustomJewelry`}  render={(routerProps)=> <CustomJewelry submitForm={submitForm} />} />
                <Route path={`${props.match.url}/Repair`}  render={(routerProps)=> "Repair"} />
                <Route path={`${props.match.url}/Repurpose`}  render={(routerProps)=> "Repurpose"} />
                <Route exact path={`${props.match.url}/`}  render={()=>"Inquiry Forms"} />
                <Route exact path={`${props.match.url}/*`}  render={(browserProps)=><Normal404Page {...browserProps} />} />



            </Switch>
    )
}


export default FormContainer(InquiryContainer)