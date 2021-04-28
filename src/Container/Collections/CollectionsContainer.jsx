import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Grid, Pagination} from 'semantic-ui-react'

import ItemCard from '../../Component/Items/ItemCard'
import Normal404Page from '../../Component/404/Normal404Page'
import {categoryNames} from '../../Component/categories'


const CollectionsContainer = (props)=>{

    const {category} = useParams()

    
    const [showcaseItems,setShowcaseItems] = useState()
    const [paginationIndex, setPaginationIndex] = useState({current: 1, max: 1})
    const [error, setError] = useState(false)

    useEffect(()=>{
        if(categoryNames.includes(category)){
        getItems({category: category})
        }
        else{
            setError(true)
        }
    },[])
    useEffect(()=>{

        if(categoryNames.includes(category)){
        document.title=process.env.REACT_APP_TITLE + " " + category
        setError(false)
        getItems({category: category})
        }
        else setError(true)
    },[category])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[paginationIndex.current])

    const getItems=({category, page=1})=>{
        const options ={
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
              },
              credentials: 'include',
              body: JSON.stringify({page: page})
            }

        fetch(process.env.REACT_APP_API_URL + "categories/"+ category,options)
            .then(response=> response.json())
            .then(itemsObj =>{
                setShowcaseItems(itemsObj.items)
                setPaginationIndex({...paginationIndex, max: itemsObj.meta.total_pages})
            })


    }
    const displayShowcaseItemCards =()=>{
        const itemCards = showcaseItems?.map((element)=>{

            return (

          
            <Grid.Column key={element.name} style={{marginBottom: "10px"}}>
               <ItemCard key={element.slug} {...element}/> 
            </Grid.Column>
            )

           })

           return (
               <>
                <Grid.Row stretched centered={true} only="computer" columns="5"  >
                    {itemCards}
                </Grid.Row>
                <Grid.Row  stretched centered={true} only="mobile tablet" columns="2" stackable="true" >
                    {itemCards}
                </Grid.Row>
                </>
           )

       
    }

    const changeHandler = (e,data)=>{
        const currentPage = data.activePage

        if (currentPage !== paginationIndex.current){
            getItems({category: category, page: currentPage})
        }

    }



    return(
        <Container  className="page-container-grid">
            <Grid doubling>

            {error? <Normal404Page /> : displayShowcaseItemCards()}

            <Grid.Row centered={true}>
                <Pagination  
                defaultActivePage = {1}
                activePage = {paginationIndex.current}
                totalPages = {paginationIndex.max}
                onPageChange = {changeHandler}
                boundaryRange={1}
                siblingRange={1}
                prevItem={{
                    'aria-label': 'Previous item',
                    content: "⟨",                    
                disabled: paginationIndex.current===1}
                  }
                nextItem={{
                    'aria-label': 'Next item',
                    content: "⟩",                    
                disabled: paginationIndex.current===paginationIndex.max}
                  }
                />
               
            </Grid.Row>


            </Grid>
        </Container>
    )


}


export default CollectionsContainer