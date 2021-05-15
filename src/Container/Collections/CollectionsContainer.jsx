import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Grid, Pagination, Placeholder} from 'semantic-ui-react'

import ItemCard from '../../Component/Items/ItemCard'
import Normal404Page from '../../Component/404/Normal404Page'
import {categoryNames} from '../../Component/categories'


const CollectionsContainer = (props)=>{

    const {category} = useParams()
    
    const [showcaseItems,setShowcaseItems] = useState()
    const [paginationIndex, setPaginationIndex] = useState({current: 1, max: 1})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if(categoryNames.includes(category)){
            setLoading(true)
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
        setLoading(true)
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

                setLoading(false)
                setShowcaseItems(itemsObj.items)
                setPaginationIndex({current: page, max: itemsObj.meta.total_pages})
            })


    }
    const displayShowcaseItemCards =()=>{
        const itemCards = showcaseItems?.map((element)=>{
            return (

          <>
                <Grid.Column key={element.name} style={{marginBottom: "10px"}}>
                    <ItemCard key={element.slug} {...element}/> 
                </Grid.Column>
                
        </>
            )

           })

           return (
               <>
                <Grid.Row stretched centered={true} only="computer" columns="5"  >
                    {loading?  placeholderItems(): itemCards}
                </Grid.Row>
                <Grid.Row  stretched centered={true} only="mobile tablet" columns="2" stackable="true" >
                    {itemCards}
                    {loading?  placeholderItems(): itemCards}
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

    const placeholderItems=()=>{
        return(
            <>
                <Grid.Column>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
                <Grid.Column>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
                <Grid.Column>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
                <Grid.Column>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
                <Grid.Column>
                    <Placeholder>
                        <Placeholder.Header image>
                            <Placeholder.Line />
                            <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='medium' />
                            <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                    </Placeholder>
                </Grid.Column>
                </>
         
        )
    }

    const renderPagination = ()=>{
        return(
                <Pagination  
                    // defaultActivePage = {1}
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
        )
    }

    



    return(
        <Container  className="page-container-grid">
            <Grid doubling>

            {error? <Normal404Page /> : displayShowcaseItemCards()}

            <Grid.Row centered={true}>
                    {showcaseItems?.length? renderPagination() : null}
            
             </Grid.Row>


            </Grid>
        </Container>
    )


}


export default CollectionsContainer