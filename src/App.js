import './App.scss';
import {Route} from 'react-router-dom'
import UserContext from './Context/UserContext'
import MobileContext from './Context/MobileContext'
import CartContext from './Context/CartContext'

import React,{useState, useEffect, createContext} from 'react'

import RoutesContainer from './Container/RoutesContainer'
import MenuBar from './Container/MenuBar'
import Footer from './Container/Footer'







const App = () => {
  const beginningUserObject = JSON.parse(localStorage.getItem("user"))
  const beginningCart = JSON.parse(localStorage.getItem("cart"))
  const [user,setUser] = useState(beginningUserObject? beginningUserObject["email"]:null)
  let mobile = window.innerWidth <= 760
  const [windowSize,setWindowSize] = useState(window.innerWidth)
  const [cart,setCart] = useState(beginningCart? beginningCart : [])

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

  const changeCart = ({instruction,cartItem,quantity=1})=>{
    let tempCart = [...cart]
    let cartIndex = tempCart.findIndex((element)=> element.slug===cartItem.slug && element.material === cartItem.material)
    let saveCart = ()=>{

      localStorage.setItem("cart",JSON.stringify(tempCart))
      setCart(tempCart)
    }

      if(cartIndex !== -1){
            switch(instruction) {
              case "add":
                tempCart[cartIndex].quantity++
                break;
              case "modify":
                if(quantity===0){
                  tempCart.splice(cartIndex,1)
                }
                else tempCart[cartIndex].quantity = quantity
                break;
              case "delete":
                tempCart.splice(cartIndex,1)
                break;
            }
            saveCart()
        }
        else if (instruction==="add"){
          tempCart.push({...cartItem,quantity: quantity})
          saveCart()
        }
  }





  return (

    
    <div className="App">  
      
    <MobileContext.Provider value={{mobile}}>
        <UserContext.Provider  value={{user,login,logout}} >
          <CartContext.Provider value={{cart,changeCart}} >
               <MenuBar />


                  
              <RoutesContainer />


              <Footer />
          </CartContext.Provider>
        </UserContext.Provider>
      </MobileContext.Provider>
    </div>
  );
}

export default App;
