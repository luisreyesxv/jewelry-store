import React from 'react'
import {Grid} from 'semantic-ui-react'


const FormContainer = (Component) =>{


    return (props)=>{

        return(
                <Grid textAlign="center" verticalAlign="middle" id="log-in-register-grid" className="page-container-grid"  >
                        <Grid.Column id="log-in-register-column" style={{maxWidth: 550}}>
                                <Component {...props} />
                        </Grid.Column>
                </Grid>
        )
    }


}




export default FormContainer