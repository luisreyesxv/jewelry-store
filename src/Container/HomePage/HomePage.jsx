import React,{useEffect,useState} from 'react'
import UserContextConsumer from '../../Context/UserContextConsumer'
import MobileContextConsumer from '../../Context/MobileContextConsumer'

import {Container,Grid, Placeholder } from 'semantic-ui-react'


import ItemCard, {SpecialItemCard} from '../../Component/Items/ItemCard'
import HomePageCategories from './HomepageCategories'
import HomePageHero from '../../Component/HomePage/HomePageHero'
import HomePageCustomInquiryBanner from '../../Component/HomePage/HomePageCustomInquiryBanner'
import HomePagePortfolioBanner from '../../Component/HomePage/HomePagePortfolioBanner'


// import {useParams,useQuery, useLocation, Route, Switch} from 'react-router-dom'




const HomePage =(props)=>{

    
    useEffect(()=>{
        document.title="Welcome to "+ process.env.REACT_APP_TITLE
        getShowcaseItems()
    },[])

    const [showcaseItems,setShowcaseItems]= useState()

    const communicateWithServer=({params,options})=>{
        return( 
            fetch(process.env.REACT_APP_API_URL + params,options)
            .then(response=> response.json())
        )
    }


    const getShowcaseItems=()=>{
        communicateWithServer({params:"showcase"})
        .then(showcaseItemsObject=>{
            setShowcaseItems(showcaseItemsObject)
        })
    }



    const placeholderShowcaseItems=()=>{
        return(
            <Grid.Row centered columns={5}>
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
            </Grid.Row>
        )
    }

    const displayShowcaseItemCards =({beginning, ending})=>{
        let mobileItemCards = [];
        let pcItemCards = [];
        let specialItem;
        const showcaseItemSlice = showcaseItems.slice(beginning,ending)



        showcaseItemSlice.forEach((element,index)=>{

            const mobile = <Grid.Column key={element.name}><ItemCard key={element.slug} {...element}/> </Grid.Column>

            mobileItemCards.push(mobile)

            index===0? specialItem= <SpecialItemCard key={element.slug} {...element}/> : pcItemCards.push(<ItemCard key={element.slug} {...element}/>)



        })
        

           return (
            //    <>
            //     <Grid.Row stretched centered={true} only="computer" columns="5"  >
            //         {itemCards}
            //     </Grid.Row>
            //     <Grid.Row  stretched centered={true} only="mobile tablet" columns="2" stackable="true" >
            //         {itemCards}
            //     </Grid.Row>
            //     </>

          //XXXXXXXXXXXXXXXXXXXXX
            //     <Grid.Row stretched centered={true} only="computer" columns="2"  >
            //         <Grid.Column width="4">

            //         <Grid.Row stretched centered={true} only="computer" columns="5"  >
            //             {itemCards[0]}
            //         </Grid.Row>
            //         </Grid.Column>
            //         <Grid.Column>

            //         <Grid.Row stretched centered={true} only="computer" columns="5"  >
            //             {itemCards}
            //         </Grid.Row>
            //         </Grid.Column>
            //         </Grid.Row>

            //         <Grid.Row  stretched centered={true} only="mobile tablet" columns="2" stackable="true" >
            //             {itemCards}
            //         </Grid.Row>
            // </>


            <>
            <Grid  ui centered  reversed={beginning? "computer": null}>
                <Grid.Row columns="2" only="computer" >
                    <Grid.Column width="8" centered>
                        {specialItem }
                    </Grid.Column>
                    <Grid.Column>
                            <div className="ui two doubling special cards">
                                    {pcItemCards }
                                    
                                </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row  stretched centered={true} only="mobile tablet" columns="2" stackable="true" >
                   {mobileItemCards}
                </Grid.Row>
            </Grid>
            
            </>
        
           )

       
    }
    




    return (
        <Container style={{paddingBottom:"3em"}} className="page-container-grid">
            <Grid doubling>
                <HomePageHero />
                <HomePageCategories />
                <HomePageCustomInquiryBanner />
                {showcaseItems? displayShowcaseItemCards({beginning: 0, ending: 5}) : placeholderShowcaseItems()}
                <HomePagePortfolioBanner />
                {showcaseItems? displayShowcaseItemCards({beginning: 5, ending: 11}) : placeholderShowcaseItems()}
            </Grid>
        </Container>
        
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



export default MobileContextConsumer(UserContextConsumer(HomePage))

