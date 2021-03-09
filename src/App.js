import './App.scss';
import {Route} from 'react-router-dom'
import UserContext from './Context/UserContext'
import MobileContext from './Context/MobileContext'

import React,{useState, useEffect} from 'react'

import RoutesContainer from './Container/RoutesContainer'
import MenuBar from './Container/MenuBar'
import Footer from './Container/Footer'







const App = () => {
  const beginningUserObject = JSON.parse(localStorage.getItem("user"))
  const [user,setUser] = useState(beginningUserObject? beginningUserObject["email"]:null)
  // const [mobile,setMobile] =  useState(window.innerWidth <= 760)
  let mobile = window.innerWidth <= 760
  const [windowSize,setWindowSize] = useState(window.innerWidth)

  useEffect(()=>{
    ping()
  },[])

  useEffect(()=>{
  
    
      //register the window resize listener
      window.addEventListener("resize", windowResize)
      //un-register the listener
      return () => window.removeEventListener("resize",windowResize)
    
  },[setWindowSize])

  

  const login = (userObject) =>{
    localStorage.setItem("user",JSON.stringify(userObject))
    setUser(userObject.email)
  }

  const logout = () =>{
    localStorage.removeItem("user")
    setUser(null)
  }

  const windowResize=()=>{
    setWindowSize(window.innerWidth)
    
    let currentWindow = windowSize <= 760
    
    if(currentWindow !== mobile){
      mobile = currentWindow
    }
  }


  const ping =()=>{
  

    if (localStorage.getItem("user")){
      const userObject = JSON.parse(localStorage.getItem("user"))
      const body = {user:{
          
          email: userObject.email,
          // password: "fakefakefake"
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


      fetch(process.env.REACT_APP_API_URL+"session",options)
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
      
    <MobileContext.Provider value={{mobile}}>
        <UserContext.Provider  value={{user,login,logout,ping}} >
        <MenuBar />


            
        <RoutesContainer />


        <Footer />

        </UserContext.Provider>
      </MobileContext.Provider>
    </div>
  );
}

export default App;
