import './App.css';
import {Route, Redirect} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import UserContext from './Context/UserContext'
import React,{useState, useEffect} from 'react'

import HomePage from './Container/HomePage'
import ItemsContainer from './Container/ItemsContainer'
import UserContextConsumer from './Context/UserContextConsumer'




const App = () => {
  const [user,setUser] = useState("luis is the user")


  useEffect(()=>{

    setUser("reyes is my swagger name")
  },[])

  const login = (token) =>{
    setUser(token)
  }

  const logout = () =>{
    setUser(null)
  }

  return (



    <div className="App">
      Luis is the greatest
      <Menu  name="swag" active={true}>
        <Menu.Item> swag</Menu.Item>
      </Menu>
      <UserContext.Provider  value={{user,login,logout}} >
          <Route exact path="/" render ={(routerProps)=><HomePage />} />
          {/* <Route exact path="/items" render ={(routerProps)=><ItemsContainer/>} /> */}
          <Route exact path="/items" render ={(routerProps)=><ItemsContainer/>} />

      </UserContext.Provider>
      {/* <HomePage > Luis</HomePage> */}
    </div>
  );
}

export default App;
