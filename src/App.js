import './App.scss';
import CookieConsent from "react-cookie-consent"
import {useLocation} from 'react-router-dom'
import UserContext from './Context/UserContext'
import MobileContext from './Context/MobileContext'
import CartContext from './Context/CartContext'

import React,{useState, useEffect, useLayoutEffect} from 'react'

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

  const {pathname} = useLocation()

  useEffect(()=>{
    ping()
  },[])

  useEffect(()=>{
  
    
      //register the window resize listener
      window.addEventListener("resize", windowResize)
      //un-register the listener
      return () => window.removeEventListener("resize",windowResize)
    
  },[setWindowSize])

  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  },[pathname])

  

  const login = (userObject) =>{
    localStorage.setItem("user",JSON.stringify(userObject))
    setUser(userObject.email)
  }

  const loggingOut = () =>{
    const options ={
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: 'include'
    }
      fetch(process.env.REACT_APP_API_URL+"/login",options)
      .then(()=>{

       logout()

      })
    
  }

  const logout=()=>{
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

  const changeCart = ({instruction,cartItem,replacementCart, quantity=1})=>{
    let tempCart = [...cart]
    let cartIndex = cartItem? tempCart.findIndex((element)=> element.slug===cartItem.slug && element.material === cartItem.material) : -1
    let saveCart = ()=>{

      localStorage.setItem("cart",JSON.stringify(tempCart))
      setCart(tempCart)
    }

      if(cartIndex !== -1){
            switch(instruction) {
              case "modify":
                if(quantity===0){
                  tempCart.splice(cartIndex,1)
                }
                else tempCart[cartIndex].quantity = quantity
                break;
              case "delete":
                tempCart.splice(cartIndex,1)
                break;
              default:
                tempCart[cartIndex].quantity++
             
                
            }
            saveCart()
        }
        else if (instruction==="add"){
          tempCart.push({...cartItem,quantity: quantity})
          saveCart()
        }
        else if (instruction ==="replace_all"){
          tempCart = replacementCart
          saveCart()
        }
        else if(instruction ==="delete_all"){
          localStorage.removeItem("cart",JSON.stringify(tempCart))
      setCart([])
        }
  }





  return (

    
    <div className="App">  
    <CookieConsent >
    We use cookies and other tracking technologies to improve your browsing experience on our website, 
    to show you personalized content and targeted ads, to analyze our website traffic,
     and to understand where our visitors are coming from.
    </CookieConsent>
      
    <MobileContext.Provider value={{mobile}}>
        <UserContext.Provider  value={{user,login,logout, loggingOut}} >
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
