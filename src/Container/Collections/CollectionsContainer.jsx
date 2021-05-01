import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Grid, Pagination} from 'semantic-ui-react'

import ItemCard from '../../Component/Items/ItemCard'
import Normal404Page from '../../Component/404/Normal404Page'
import {categoryNames} from '../../Component/categories'


const CollectionsContainer = (props)=>{

    const {category} = useParams()

    const testItems = [
        {
            "name": "Whirlpool Cannabicyclic Acid6",
            "slug": "whirlpool-cannabicyclic-acid6",
            "price": "83.03",
            "active": true,
            "detail": "Kombucha williamsburg vinyl. Leggings chambray cleanse before they sold out ramps seitan. 8-bit vhs blog. Selvage banh mi brunch viral chillwave banjo cleanse. Cray knausgaard craft beer stumptown 90's thundercats muggle magic.",
            "description": "Readymade tacos locavore farm-to-table humblebrag pour-over poutine. Occupy shoreditch master mixtape. Bushwick etsy 8-bit tofu pork belly. Wayfarers beard ramps cliche offal. Farm-to-table pop-up brunch keffiyeh kinfolk pug xoxo. Hammock post-ironic poutine blue bottle chartreuse knausgaard.",
            "extra": {
                "gold": {
                    "id": 452,
                    "images": [
                        "https://res.cloudinary.com/dpojhdtrn/image/upload/v1606160778/gold%20ring%201.png"
                    ]
                }
            },
            "materials": [
                {
                    "name": "gold"
                }
            ]
        },
        {
            "name": "Blue Star Cannabinolic Acid8",
            "slug": "blue-star-cannabinolic-acid8",
            "price": "5.52",
            "active": true,
            "detail": "Fingerstache lo-fi cardigan austin vice biodiesel 90's. Kale chips artisan vhs raw denim narwhal etsy. Meditation post-ironic tumblr paleo mustache venmo tattooed banjo.",
            "description": "Messenger bag biodiesel vinyl. Hashtag selfies ramps messenger bag butcher freegan artisan. Ethical blog heirloom single-origin coffee fixie. Ethical yr craft beer. Kale chips pbr&b pickled. Tote bag listicle hella shoreditch heirloom. Hashtag austin drinking flexitarian. Meggings chia goth. Cornhole vice portland pinterest twee chillwave marfa.",
            "extra": {
                "silver": {
                    "id": 454,
                    "images": [
                        "https://res.cloudinary.com/dpojhdtrn/image/upload/v1606160778/gold%20ring%201.png"
                    ]
                }
            },
            "materials": [
                {
                    "name": "silver"
                }
            ]
        },
        {
            "name": "Electrolux Cannabicyclic Acid12",
            "slug": "electrolux-cannabicyclic-acid12",
            "price": "22.3",
            "active": true,
            "detail": "Fixie chartreuse disrupt 8-bit direct trade pug. Selfies aesthetic trust fund xoxo williamsburg pour-over meh. Try-hard distillery cliche mumblecore bushwick pbr&b hammock retro. Hashtag crucifix selfies bespoke.",
            "description": "Meh gastropub mixtape neutra hammock banh mi. Tousled vhs bicycle rights photo booth meggings. Mumblecore whatever locavore quinoa dreamcatcher. Etsy lomo pbr&b kale chips authentic waistcoat. Kitsch hoodie brunch deep v. Raw denim bushwick viral.",
            "extra": {
                "silver": {
                    "id": 458,
                    "images": [
                        "https://res.cloudinary.com/dpojhdtrn/image/upload/v1606160778/gold%20ring%201.png"
                    ]
                }
            },
            "materials": [
                {
                    "name": "silver"
                }
            ]
        },
        {
            "name": "IKEA Tetrahydrocannabivarin24",
            "slug": "ikea-tetrahydrocannabivarin24",
            "price": "95.4",
            "active": true,
            "detail": "Meh fixie tilde yr. Heirloom sartorial sriracha. Goth celiac echo seitan authentic godard kickstarter.",
            "description": "Hoodie freegan cardigan +1 master direct trade tousled. Pop-up yolo sustainable polaroid pbr&b. Phlogiston selvage meh wolf forage single-origin coffee. Tote bag 3 wolf moon shoreditch paleo cleanse. Letterpress schlitz lumbersexual kickstarter. Tacos everyday seitan. You probably haven't heard of them street organic 3 wolf moon phlogiston.",
            "extra": {
                "gold": {
                    "id": 470,
                    "images": [
                        "https://res.cloudinary.com/dpojhdtrn/image/upload/v1606160778/gold%20ring%201.png"
                    ]
                },
                "silver": {
                    "id": 485,
                    "images": [
                        "https://www.fillmurray.com/1000/1000"
                    ]
                }

            },
            "materials": [
                {
                    "name": "gold"
                },
                {
                    "name": "silver"
                }
            ]
        },
        {
            "name": "IKEA Cannabidivarin26",
            "slug": "ikea-cannabidivarin26",
            "price": "52.38",
            "active": true,
            "detail": "Lumbersexual umami craft beer bushwick paleo. Mixtape carry vhs tousled forage church-key gluten-free. Knausgaard disrupt offal try-hard five dollar toast skateboard seitan. Beard portland roof taxidermy keffiyeh 90's knausgaard. Chillwave tattooed brooklyn blue bottle poutine pug selvage.",
            "description": "Before they sold out messenger bag thundercats mumblecore. Tumblr wolf salvia.",
            "extra": {
                "gold": {
                    "id": 472,
                    "images": [
                        "https://res.cloudinary.com/dpojhdtrn/image/upload/v1606160778/gold%20ring%201.png"
                    ]
                }
            },
            "materials": [
                {
                    "name": "gold"
                }
            ]
        },
        {
            "name": "Siemens Cannabinol27",
            "slug": "siemens-cannabinol27",
            "price": "72.26",
            "active": true,
            "detail": "Iphone before they sold out keytar taxidermy cray gentrify. Thundercats cred gluten-free knausgaard brunch. Gluten-free aesthetic helvetica blue bottle vegan health stumptown asymmetrical.",
            "description": "Flexitarian cleanse hella lo-fi everyday cronut craft beer. Helvetica stumptown vhs cardigan tofu. Craft beer master polaroid. Iphone swag crucifix leggings xoxo next level. Locavore chillwave chambray. Lumbersexual tote bag 3 wolf moon cornhole hashtag cliche. Banjo microdosing vhs.",
            "extra": {
                "platinum": {
                    "id": 473,
                    "images": [
                        "https://res.cloudinary.com/dpojhdtrn/image/upload/v1606160778/gold%20ring%201.png"
                    ]
                }
            },
            "materials": [
                {
                    "name": "platinum"
                }
            ]
        }
    ]

    
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

                console.log(itemsObj.items)
                setShowcaseItems(itemsObj.items)
                setPaginationIndex({...paginationIndex, max: itemsObj.meta.total_pages})
            })


    }
    const displayShowcaseItemCards =()=>{
        // const itemCards = showcaseItems?.map((element)=>{
            const itemCards = testItems?.map((element)=>{

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