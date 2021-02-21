import React,{useContext, useEffect} from 'react'
import UserContext from '../Context/UserContext'
import UserContextConsumer from '../Context/UserContextConsumer'
import {Segment} from 'semantic-ui-react'
import {useParams,useQuery, useLocation, Route, Switch} from 'react-router-dom'




const HomePage =(props)=>{
    
    useEffect(()=>{
        // props.login("The original username")
    },[props])




    return (
        <div>homepage</div>
        
    )

    // let {user} =  useParams()
    // let query = new URLSearchParams(useLocation().search)

    // console.log("Luis" ,props, user)

    // return (
    //     <Segment basic>
    //     "This is the home page swag swag swag"  {query.get("title")}
    //     <p> {props.user}</p>
    //     <Switch>
    //         <Route exact path={`${props.match.url}:user`}   render={(browserProps)=> "nested with params " + browserProps.match.params.user }/>
    //         <Route exact path={`${props.match.url}`}>
    //             normal
    //         </Route>



    //     </Switch>
    //     </Segment>
    // )
}



export default UserContextConsumer(HomePage)

