import React from 'react'
import {Link} from 'react-router-dom'
import {Modal, Button} from 'semantic-ui-react'


const PurchaseModal = (props)=>{



    return (
        <Modal
        open = {props.status}
        basic
        >


                <Modal.Header> You Must Be Logged In To Continue</Modal.Header>

                    <Modal.Content >
                        <Modal.Description>
                        Thank you for trying out <strong>Bartolome Jewelry</strong>. In order to continue with the Checkout process, you must either register for a new account or log into your existing account.

                        </Modal.Description>

                        
                            
                    </Modal.Content>
                    <Modal.Actions >
                            <Button as={Link} to="/login"> Log In</Button>
                            <Button as={Link} to="/register">Register</Button>

                        </Modal.Actions>
                


               
        </Modal>


    )
}




export default PurchaseModal