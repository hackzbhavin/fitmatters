import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import shoe4 from '../assets/shoe4.png'

export default function Content() {





  return (
    <Row className='homeMainThirdSection mt-5 h-50 d-flex align-items-center justify-content-center p-4' >
    <Col className='homeMainSecondSectionCards'>

<h4 className='cardsHeadingJ '>STEP UP YOUR STYLE GAME</h4>

</Col>
    <Col className='homeMainSecondSectionCards'>
        <img
                    src={shoe4}
                    width={300}
                    
                />
  
        </Col>
    </Row>
  )
}
