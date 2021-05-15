import React from 'react'
import {Container, Grid, Form, Header, List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import UserContextConsumer from '../Context/UserContextConsumer'


const AccountContainer = (props)=>{

    const recoverPassword =()=>{

        const body = {password_recovery:{
              email: props.email
            }
        }

        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(body)
          }
              
        //   fetch(process.env.REACT_APP_API_URL+"password/forgot",options)
        //   .then(response=> {
        //     if(!response.ok){
        //         throw new Error(response.status)
        //      }
        //       else return response.json()})
        //   .then(userObject =>{
        //     //   successHandler()
        //   })
        //   .catch(errorMessage=>{
        //     const errorResponseMessage = errorMessage.message==="400"? "Email Address not found. Please check and try again." : "There was a problem with recovering the password. Please try again later."
        //     // errorHandler(errorResponseMessage)
        //   })
        }



    return(
        <Container className="page-container-grid">
                <Grid  verticalAlign="middle"  columns="2" style={{paddingBottom: "50px"}}>
                    <Grid.Row>
                        <Grid.Column>
                        <Form>
                            <Header size="huge"> My Account</Header>
                            <Form.Group>
                                <Form.Field>
                                    <label> First Name</label>
                                    <input placeholder="First Name" />
                                </Form.Field>
                                <Form.Field>
                                    <label> Last Name</label>
                                    <input placeholder="Last Name" />
                                </Form.Field>
                                
                                </Form.Group>
                                <Form.Field>
                                    <label> Email</label>
                                    <input placeholder="Email"  type="email"/>
                                </Form.Field>
                                

                        </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <List>
                                <List.Item>
                                    <Link onClick={recoverPassword} > Click on dark side of the ring</Link>
                                </List.Item>
                                <List.Item>
                                    <Link to="/swag" > Click on dark side of the ring</Link>
                                </List.Item>
                                <List.Item>
                                    <Link to="/swag" > Click on dark side of the ring</Link>
                                </List.Item>
                            </List>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
        </Container>
    )
}


export default UserContextConsumer(AccountContainer)

