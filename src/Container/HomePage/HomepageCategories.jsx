import React from 'react'
import {Grid } from 'semantic-ui-react'


import HomePageCategory from '../../Component/HomePage/HomePageCategory'
import categories from '../../Component/categories'





const HomePageCategories =()=>{
   


    const displayHomepageCategories=()=>{

        const categoryComponents = categories.map((category)=>{

            return(
                <Grid.Column key={"HomePage "+category.text} textAlign="center" >
                    {/* {category.categoryName.toUpperCase()}
                     */}
                     <HomePageCategory 
                        {...category}
                     
                     
                     />
                </Grid.Column>

            )
        })


        return (
            <>
        <Grid.Row className = "homepage-categories" stretched centered={true} only="computer tablet" columns="5"  >
            {categoryComponents}
        </Grid.Row>
        <Grid.Row className = "homepage-categories" stretched centered={true} only="mobile" columns="2" stackable="true" >
            {categoryComponents}
        </Grid.Row>
        </>
        )

        
    }




    return (
        <>
    
            {displayHomepageCategories()}
    
        </>
    )
}

export default HomePageCategories