import React, {useState,useEffect} from 'react'
import UserContextConsumer from '../Context/UserContextConsumer'

import {useParams, useLocation} from 'react-router-dom'
import {Grid,Container} from 'semantic-ui-react'

import Normal404Page from '../Component/404/Normal404Page'
import ItemsImage from '../Component/Items/ItemsImage'
import ItemsBasicInfo from "../Component/Items/ItemsBasicInfo"
import ItemsDetails from "../Component/Items/ItemsDetails"






const ItemsContainer =(props)=>{

  const {slug} = useParams()
  let urlQueryValues = new URLSearchParams(useLocation().search)
  const [item,setItem] = useState()
  const [material,setMaterial]= useState(urlQueryValues.get("material"))
  const [itemNotFound,setItemNotFound] = useState(false)



  useEffect(()=>{
    getItemInformation()
    document.title= "Loading Item"+ process.env.REACT_APP_TITLE

  },[slug])

  useEffect(()=>{
    if(item){
        document.title=item.name + " - "+ process.env.REACT_APP_TITLE 
    }
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
        if(!item.extra[urlQueryValues.get("material")]){
          setMaterial( Object.keys(item.extra)[0])
        }
        else if (material !== urlQueryValues.get("material")){
          setMaterial(urlQueryValues.get("material"))
        }
      }
    }


    const fileExists = ()=>{

            return (
              <Container className="page-container-grid">
                <Grid  verticalAlign="middle" className="page-container-grid" >
                  <Grid.Row columns="2" >
                      <Grid.Column mobile="14" computer ="8" tablet="8" style={{marginBottom: "10px"}}>
                          {/* <img src={item?.images[material]?.[0]} /> */}
                          <ItemsImage  images={item?.extra[material]?.images} />
                      </Grid.Column>
                      <Grid.Column mobile="16" computer ="8" tablet="8">
                        <ItemsBasicInfo item={item} materialPicked={material} setMaterial={setMaterial}/>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <ItemsDetails item={item} materialPicked={material}/>
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

