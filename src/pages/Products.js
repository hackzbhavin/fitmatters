import React, { useEffect, useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap'
import Layout from '../components/Layout'
import shoe5 from '../assets/shoe5.png'
import Content from '../components/Content';

export default function Products() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [shoesList] = useState([
        {
            id: 1
            , image: "https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_1280.jpg"
            , price: 2200
            , title: "Black Shoes"
            , size: ["8", "9", "10", "11"]

        },
        {
            id: 2
            , image: "https://cdn.pixabay.com/photo/2016/09/02/11/10/boots-1638873_1280.jpg"
            , price: 4400
            , title: "Brown Shoes"
            , size: ["3", "8", "10", "11"]

        },
        {
            id: 3
            , image: "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg"
            , price: 2100
            , title: "Leather Brown Shoes"
            , size: ["8", "9", "10"]

        },
        {
            id: 4
            , image: "https://cdn.pixabay.com/photo/2016/09/21/12/21/wingtip-1684700__480.jpg"
            , price: 1100
            , title: "Pointed Brown Shoes"
            , size: ["4", "5", "6"]

        },
    ])




    return (
        <Layout>




            <Container >

                <div class="jumbotron jumbotron-fluid">
                    <div class="">
                        <h1 class="display-4 m-5">Our Products

                            <img
                                src={shoe5}
                                width={200}
                            />
                        </h1>


                    </div>

                </div>


                <Row className='productPageContainer p-4' >
                    {
                        shoesList.map((data) => {
                            return (
                                <Col key={data.id}>
                                    <div className='productPage '>

                                        <img
                                            src={data.image}
                                            width={330}
                                            height={200}
                                            className="text-center"
                                        />

                                        <h4
                                            className='productPageCardTitle'
                                        >
                                            {data.title}
                                        </h4>
                               
                                        <div className='p-2'>

                                        <FloatingLabel controlId="floatingSelect" label="Select Size">
                                            <Form.Select aria-label="Floating label select example">
                                                <option>Avail Size</option>
                                                {
                                                    data.size.map((d)=>{
                                                        return(

                                                            <option value={d}>{d}</option>
                                                        )

                                                    })
                                                }
                                                
                                            </Form.Select>
                                        </FloatingLabel>
                                        </div>

                                        <div
                                        className='p-2 text-center'
                                        >

                                        <Button
                                        onClick={handleShow}
                                        variant={"dark"}
                                        className="buttonBuy"
                                        
                                        >
                                           Buy at {"Rs. "+data.price}
                                        </Button>
                                            </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>  
            
            
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header>
          <Modal.Title>Thank You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         we have collected your response we will get back to you !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"
          onClick={handleClose}
          >Understood</Button>
        </Modal.Footer>
      </Modal>

        <Content/>
            
              </Layout>
    )
}
