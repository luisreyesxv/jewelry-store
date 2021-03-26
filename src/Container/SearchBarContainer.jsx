import React,{useState,useEffect,useCallback} from 'react'
import {Link} from 'react-router-dom'
import MobileContextConsumer from '../Context/MobileContextConsumer'

import debounce from 'lodash.debounce'


import {Search,Menu, Button, Container,Segment,Sidebar, Icon, Label} from 'semantic-ui-react'





const SearchBarContainer =(props)=>{

    const [searchSidebarOpened,setSearchSidebarOpened] = useState(false)
    const [searchValue,setSearchValue] = useState("")
    const [searchResults,setSearchResults] = useState({loading:false,results:[]})

    const searchAPI=()=>{

        if(searchValue){


        fetch(process.env.REACT_APP_API_URL+"search/"+searchValue)
          .then(response=> {
            if(!response.ok){
             throw new Error()
            }
            else return response.json()
            
          })
          .then(itemsObject =>{
            setSearchResults({
                loading: false,
                results: itemsObject})


          })
          .catch(()=> console.log("error in searchAPI"))
        }

    }
    const debouncedFunction = useCallback(debounce(searchAPI,2000),[searchValue])


    useEffect(()=>{
        debouncedFunction()

        return(
            debouncedFunction.cancel
        )


    },[searchValue,debouncedFunction])


    

    const resultSelectHandler = ()=>{
        searchSidebarOpened && setSearchSidebarOpened(false)
        setSearchResults({loading:false,results:[]})
        setSearchValue("")
    }

    const changeValue =(e,data)=>{

        setSearchValue(data.value)
        setSearchResults({...searchResults,loading:true})
        

    }
    const resultRender = ({title,image,material, slug}) => <Search.Result as={Link} to={`/items/${slug}?material=${material}`}   title={title} image={image}  />
    

    const mobileComponent =()=>{
        return  (
            <>
            <Sidebar 
            as={Menu}
            id="sidebar-main-menu"
            animation = "overlay"
            direction="right"
            inverted = {true}
            onHide ={()=>setSearchSidebarOpened(false)}
            vertical = {true}
            visible={searchSidebarOpened}
            
            >
                <Menu.Item>
                    <Search size="small" value={searchValue} 
                        loading={searchResults.loading} 
                        results={searchResults.results} onSearchChange={changeValue} 
                        resultRenderer={resultRender}
                        onResultSelect ={resultSelectHandler}
                    />
                </Menu.Item>
            </Sidebar>
    
    
            <Menu.Item  onClick={()=> setSearchSidebarOpened(true)} >
                <Icon name="search" size="large" />
            </Menu.Item>
    
        </>
        )
    }

    const pcComponent = () =>{
        return (
        <Search  
            size="mini" value={searchValue} 
            loading={searchResults.loading} 
            results={searchResults.results} onSearchChange={changeValue} 
            resultRenderer={resultRender}
            onResultSelect ={resultSelectHandler}
        />

        

        )
    }

return (
    props.mobile?mobileComponent():pcComponent()
)

   
}


export default MobileContextConsumer(SearchBarContainer)
