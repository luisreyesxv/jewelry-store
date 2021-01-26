import './App.css';
import {Route, Redirect} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import UserContext from './Context/UserContext'
import React,{useState, useEffect} from 'react'

import HomePage from './Container/HomePage'
import ItemsContainer from './Container/ItemsContainer'




const App = () => {
  const beginningUserObject = JSON.parse(localStorage.getItem("user"))
  const [user,setUser] = useState(beginningUserObject? beginningUserObject["email"]:null)


  useEffect(()=>{

    // setUser("reyes is my swagger name")

    ping()
  },[])

  const login = (userObject) =>{

    localStorage.setItem("user",JSON.stringify(userObject))
    setUser(userObject.email)
  }

  const logout = () =>{
    localStorage.removeItem("user")
    setUser(null)
  }


  const ping =()=>{
  

    if (localStorage.getItem("user")){
      const userObject = JSON.parse(localStorage.getItem("user"))
      const body = {user:{
          
          email: userObject.email,
          password: "fakefakefake"
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


      fetch("http://localhost:3000/api/v1/session",options)
      .then(response=> {
        if(!response.ok){
          throw new Error(response.status)
       }
        else return response.json()
      }
      
      )
      .then(newUserObject =>{
        login(newUserObject)

      })
      .catch((error)=>{
        logout()
        


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
