import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Modal, Loader} from 'semantic-ui-react'

import SmoothLoadingImage from '../SmoothLoadingImage'

const PurchaseModal = (props)=>{

    const [open,setOpen] = useState(props.status)
    const [longLoad,setLongLoad] = useState(false)
    const history = useHistory()



    useEffect(()=>{

        if(props.status !=="loading"){
            const message = props.status==="success"? "Purchase Order has succeeded and they are now seeing the Modal" : "Purchase Order failed"
            props.googleAnalytics({type: "Purchase",message: message})
        }

        let timer = setTimeout(()=>setLongLoad(true), 15000)

        setOpen(props.status)

        return()=> clearTimeout(timer)

    }, [props.status])


    const success = ()=>{


        return(
                <>
                <Modal.Header> Purchase was Successful</Modal.Header>

                <Modal.Content >
                    <SmoothLoadingImage  id="success-modal-image" src="https://images.nappy.co/uploads/large/81596240559elidpvwvuisi8su7074mbcw2gk2svuemo3xrzmiryjit7qdugi7pozovzactyb5xdwbab7ijtcx54lpk5gtkrv0lc5yke4jtj5fp.jpg?auto=format&fm=jpg&w=500&q=75" style={{width: "20px"}}/>
                    <Modal.Description>
                    Thank you for purchasing from <strong>Bartolome Jewelry</strong>. An email with your receipt has been sent to <i>{props.user}</i>. Please check that for more details.

                    </Modal.Description>
                        
                </Modal.Content>
                <Modal.Content>
                    <Modal.Description>
                   <em> 
                       As a reminder, this site is not actually live. No actual charge has occurred to the provided Credit Card. The information was just passed through to Stripe CC Test environment
                    </em>
                    </Modal.Description>
                        
                </Modal.Content>


                </>
        )
    }


    const loading =()=>{
        return (
           
                <Loader active={true}>Processing Order</Loader>
            
            
            )


    }

    const failure =()=>{
        return (
            
            <>
                <Modal.Header> There was a Problem With the Purchase</Modal.Header>

                <Modal.Content >
                    <Modal.Description>
                        There was an issue with placing your order. Please verify Credit Card infor and try again.
                    </Modal.Description>
                        
                </Modal.Content>


                </>


        )
    }


    const contentRender =()=>{


        if(props.status === "loading"){
            return loading()
        }
        else if (props.status === "success"){
            return success()
        }
        else return failure()
    }

    const closeHandler=()=>{

        if(props.status==="success"){
             history.push("/")
        }

        if(props.status !=="loading"){
            setOpen(false)
        }
        else if(longLoad){
            props.setSuccess("failure")
            
        }
    }


    return (
        <Modal
        closeIcon={props.status!=="loading" || longLoad}
        open = {open}
        onClose={closeHandler}

        >

            {contentRender()}
        </Modal>


    )
}




export default PurchaseModal