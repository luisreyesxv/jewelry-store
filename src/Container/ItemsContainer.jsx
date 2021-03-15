import React, {useState,useEffect} from 'react'
import UserContextConsumer from '../Context/UserContextConsumer'

import {Route,Switch,useParams, useLocation} from 'react-router-dom'
import {Grid,Container} from 'semantic-ui-react'



const ItemsContainer =(props)=>{

  const {slug} = useParams()
  let urlQueryValues = new URLSearchParams(useLocation().search)
  const [item,setItem] = useState()
  // const [material,setMaterial]= useState(urlQueryValues.get("material"))
  const [material,setMaterial]= useState(urlQueryValues.get("material"))



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
          .then(response=> response.json())
          .then(itemObject =>{
            console.log(itemObject)
            setItem(itemObject)
    
          })
    }


    const currentMaterial = () =>{

       
      if(item){
        if(!item.images[material]){
          setMaterial( Object.keys(item.images)[0])
        }
      }
    }

    return (
      <Container>
        <Grid  verticalAlign="middle" className="page-container-grid" >
          <Grid.Row>
              <h1>{item?.name}</h1>
                <p> {props.user}</p>
          </Grid.Row>
          <Grid.Row columns="2">
              <Grid.Column>
                  <img src={item?.images[material]?.[0]} />
              </Grid.Column>
              <Grid.Column>
                {slug}
                <p>{item?.description}</p>
                {"luis"+material}
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>




    )
}

export default UserContextConsumer(ItemsContainer)

