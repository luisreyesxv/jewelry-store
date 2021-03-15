import React, {useState,useEffect} from 'react'
import UserContextConsumer from '../Context/UserContextConsumer'

import {Route,Switch,useParams, useLocation} from 'react-router-dom'
import {Grid,Container} from 'semantic-ui-react'

import Normal404Page from '../Component/404/Normal404Page'
import ItemsImage from '../Component/Items/ItemsImage'





const ItemsContainer =(props)=>{

  const {slug} = useParams()
  let urlQueryValues = new URLSearchParams(useLocation().search)
  const [item,setItem] = useState()
  const [material,setMaterial]= useState(urlQueryValues.get("material"))
  const [itemNotFound,setItemNotFound] = useState(false)



  useEffect(()=>{
    getItemInformation()
  },[])
  useEffect(()=>{
    
    currentMaterial()
  },[item])
  
  


  
    const getItemInformation =()=>{

        const options = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            credentials: 'include',
          }
  
          fetch(process.env.REACT_APP_API_URL+"items/"+slug,options)
          .then(response=> {
            if(!response.ok){
             throw new Error()
            }
            else return response.json()
            
          })
          .then(itemObject =>{
            setItem(itemObject)
          })
          .catch(()=> setItemNotFound(true))
    }


    const currentMaterial = () =>{
      if(item){
        if(!item.images[material]){
          setMaterial( Object.keys(item.images)[0])
        }
      }
    }


    const fileExists = ()=>{

            return (
              <Container>
                <Grid  verticalAlign="middle" className="page-container-grid" >
                  <Grid.Row centered="true">
                      <h1>{item?.name}</h1>
                        <p> {props.user}</p>
                  </Grid.Row>
                  <Grid.Row columns="2" >
                      <Grid.Column mobile="16" computer ="8" tablet="8">
                          {/* <img src={item?.images[material]?.[0]} /> */}
                          <ItemsImage  images={item?.images[material]} />
                      </Grid.Column>
                      <Grid.Column mobile="16" computer ="8" tablet="8">
                        {slug}
                        <p>{item?.description + item?.description }</p>
                        {"luis"+material}
                      </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            )
    }


    return(
      itemNotFound?  <Normal404Page />: fileExists()
    )
}

export default UserContextConsumer(ItemsContainer)

