import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Content from '../components/Content'
import Layout from '../components/Layout'

export default function Contact() {

    const [contactDetails] = useState([
        {
            id: 1
            , name: "Saumya Jose"
            , email: "saumya.jose@mba.christuniversity.in"
        },
        {
            id: 2
            , name: "Reema Ningombam"
            , email: "reema.ningombam@mba.christuniversity.in"
        },
    ])



    return (
        <Layout>

            <Container fluid>

                <div class="jumbotron jumbotron-fluid">
                        <h1 class="display-4 m-5">Contact Us</h1>

                    </div>


                    {contactDetails.map((d) => {
                        return (

                            <div className='contactUsCard '>

                                <h5 className='contactUsCardEmail'>{d.email}</h5>

                            </div>
                        )
                    })}


            </Container>
            <Content/>
        </Layout>
    )
}
