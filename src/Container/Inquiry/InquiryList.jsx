import React,{useEffect} from 'react'
import {Grid } from 'semantic-ui-react'


import InquiryListItem from '../../Component/Inquiry/InquiryListItem'





const InquiryList =()=>{

    useEffect(()=>{
        document.title="Inquiry -"+ process.env.REACT_APP_TITLE
    },[])


    const inquiries = [{
        categoryName: "Custom Jewelry",
        link: "/inquiry/CustomJewelry",
        img: "url('https://images.nappy.co/uploads/large/10815965055639570qofkckwudezszuo0nb2fuit2rwgtfyzr6piys9jzpycn7jojsofsgu1x8e7wfeivypmf6p2yfysnsxt0b5w1mussayafwmxa.jpg?auto=format&fm=jpg&w=1280&q=75')"
    },
    {
        categoryName: "Repair",
        link: "/inquiry/Repair",
        img: "url('https://burst.shopifycdn.com/photos/using-a-rotary-tool-on-jewelry.jpg?width=925&format=pjpg&exif=1&iptc=1')"
    },
    {
        categoryName: "Repurpose Jewelry",
        link: "/inquiry/Repurpose",
        img: "url('https://images.nappy.co/uploads/large/301593100774dobxngercma1gnqhelco8p85f5nv8pfgxzepiglrxpiqiwvbnqkovzpm0yt5ocfm0w2wv7cki8uxnok6zx59smxusw8nd3kmpf5k.jpg?auto=format&fm=jpg&w=1280&q=75')"
    }
    
]



    const displayInquiries=()=>{

        const inquiryComponents = inquiries.map((category)=>{

            return(
                <Grid.Column key={"HomePage "+category.categoryName} textAlign="center"  >
                    {/* {category.categoryName.toUpperCase()}
                     */}
                     <InquiryListItem 
                        {...category}
                     
                     
                     />
                </Grid.Column>

            )
        })


        return (
            <div id="inquiryListRow">
            
             

                <p id="inquiryMessage">{ process.env.REACT_APP_TITLE} is here to help with your custom work. Whether that means wanting to specially design a one-of-a-kind jewelry, to reimagine a cherished pieced, or to retouch jewelry that means something to you. 
                Reach out through one of the links below where we can see what we can do for you.   </p>

                

            
                <Grid  centered={true} >
                    <Grid.Row className = "inquiry-list-categories" stretched centered={true} only="computer tablet" columns="equal"  >
                        {inquiryComponents }
                    </Grid.Row>
                    <Grid.Row className = "inquiry-list-categories"  centered={true} only="mobile" columns="2" stackable="true" >
                        {inquiryComponents }
                    </Grid.Row>
                </Grid>
            </div>
        )

        
    }




    return (
        <>
    
            {displayInquiries()}
    
        </>
    )
}

export default InquiryList