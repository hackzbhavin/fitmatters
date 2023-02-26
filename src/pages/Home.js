import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import shoe1 from '../assets/shoe1.png'
import shoe2 from '../assets/shoe2.png'
import shoe3 from '../assets/shoe3.png'
import shoe4 from '../assets/shoe4.png'
import Content from '../components/Content'


export default function Home() {
    return (
        <Layout>

            <Container className='homeMainContainer  d-flex align-items-center justify-content-center'>

                <Row>

                    <Col className='homeMainImageContainer '>
                        <img
                            className=''
                            src={shoe2}
                            width={500}
                        />
                    </Col>
                    <Col className='homeMainHeading'>

                        <h3 className='homeMainHeading'>
                            right shoes can make everything different
                        </h3>

                        <Button className='mt-3'
                        href='./products'
                        >

                            Visit Our Catalogue 
                        </Button>
                    </Col>

                </Row>



            </Container>
            <Row className='homeMainSecondSection'>
 
                <Col className='homeMainSecondSectionCards'>

                    <h4 className='cardsHeading'>1000+</h4>
                    <h4 className='cardsHeading text-uppercase'>OUTLETS</h4>
          
                </Col>
 
                <Col className='homeMainSecondSectionCards'>
                <img
                            src={shoe3}
                            width={300}
                        />
          
                </Col>

                <Col className='homeMainSecondSectionCards'>

                <h4 className='cardsHeading'>24000+</h4>
                    <h4 className='cardsHeading text-uppercase'>Customers</h4>
          
                </Col>
 
              


            </Row>

            <Content />
        </Layout>
    )
}
