import './App.css';
import {Route, Redirect} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import UserContext from './Context/UserContext'
import React,{useState, useEffect} from 'react'

import HomePage from './Container/HomePage'
import ItemsContainer from './Container/ItemsContainer'




const App = () => {
  const [user,setUser] = useState("luis is the user")


  useEffect(()=>{

    // setUser("reyes is my swagger name")

    ping()
  },[])

  const login = (token) =>{
    setUser(token)
  }

  const logout = () =>{
    setUser(null)
  }


  const ping =()=>{
  

    if (localStorage.getItem("user")){
      const user = JSON.parse(localStorage.getItem("user"))
      const body = {user:{
          
          email: user.email,
          password: "fakefakefake"
          }
      }
      console.log(user["email"])
      const options = {
        method: "POST",
        
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
          
        },
        credentials: 'include',       
        body: JSON.stringify(body)
      }


      fetch("http://localhost:3000/api/v1/session",options)
      .then(response=> response.json())
      .then(userObject =>{

        localStorage.setItem("user",JSON.stringify(userObject))
        // login(userObject.email)
        console.log("it succeeded")
        console.table(userObject)

      })
    }
  }

  return (



    <div className="App">
      Luis is the greatest
      <Menu  name="swag" active={"true"}>
        <Menu.Item> swag</Menu.Item>
      </Menu>
      <UserContext.Provider  value={{user,login,logout,ping}} >
          <Route exact path="/" render ={(routerProps)=><HomePage />} />
          <Route exact path="/items" render ={(routerProps)=><ItemsContainer/>} />

      </UserContext.Provider>
    </div>
  );
}

export default App;
