import React from 'react'
import {Grid } from 'semantic-ui-react'


import HomePageCategory from '../../Component/HomePage/HomePageCategory'





const HomePageCategories =()=>{
    const categories = [{
        categoryName: "Watches",
        link: "/categories/Watches",
        img: "url('https://burst.shopifycdn.com/photos/tying-up-boot-laces.jpg?width=373&format=pjpg&exif=0&iptc=0')"
    },
    {
        categoryName: "Grills",
        link: "/categories/grills",
        img: "url('https://www.toothologydental.com/wp-content/uploads/2018/06/grillz.jpg')"
    },
    {
        categoryName: "Necklaces",
        link: "/categories/Necklaces",
        img: "url('https://images.nappy.co/uploads/large/161591999879mhk8atoqaumdrpqbam4pwmeay0lbqr3nskmtcnlmxsryyohvcpitdtysoujj7pztfsco4pqbblyy0lqxzc3ixqkbvqo3kwifw8sy.jpg?auto=format&fm=jpg&w=200&q=75')"
    },
    {
        categoryName: "Earrings",
        link: "/categories/Earrings",
        img: "url('https://images.nappy.co/uploads/large/20200905-20200905-amanda-4365-2001600192717l2plmldpnlevjmucbdo6kswwardaxnj18l4dwya99feqjpduqfc0eabm4obdxilwns9cd0c3txigzlemy8sgboajlmjq8yc8tosc.jpg?auto=format&fm=jpg&w=200&q=75')"
    },
    {
        categoryName: "Rings",
        link: "/categories/Rings",
        img: "url(' https://burst.shopifycdn.com/photos/fist-with-pride-ring.jpg?width=373&format=pjpg&exif=0&iptc=0')"
    }
]



    const displayHomepageCategories=()=>{

        const categoryComponents = categories.map((category)=>{

            return(
                <Grid.Column key={"HomePage "+category.categoryName} textAlign="center" >
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