import '../App.css';
import React, { useState } from 'react';
import FieldCard from './FieldCard';
import { Container, Row, Col, Button, Offcanvas, Stack } from 'react-bootstrap';
import Customization from './Customization';

import testData from '../data/testData.json';

const data = [
  { "fieldName": "Magnetic", "currGenEq": 0, "genVal1": 1, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Electric", "currGenEq": 1, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Mlectric", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Xagnetic", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },

];

function App({ initialData }) {
  console.log(data)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div classame="App">

      {/* <Stack direction="horizontal" className="mx-2"> */}


      <Stack>

        <div className="d-flex">
          <Button id="custom" className="" onClick={handleShow}>
            <img id="icon" src="sliders.svg" alt="Customize" />
          </Button>



          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Customization</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Customization/>
            </Offcanvas.Body>
          </Offcanvas>

          <Container className=" p-0 mx-0 font-weight-bold">
            <span id="title" className="font-weight-bold">NOMR Initialization</span>
          </Container>
        </div>



        <Container id="card-field" fluid className="mt-2 px-lg-0">
          <Row className="mx-lg-5" >

            <Col md={6} lg={4}>
              <FieldCard initData={testData[0]} cardNumber={0} />
            </Col>
            <Col md={6} lg={4}>
              <FieldCard initData={testData[1]} cardNumber={1} />
            </Col>
            <Col md={6} lg={4}>
              <FieldCard initData={testData[1]} cardNumber={1} />
            </Col>
            <Col md={6} lg={4}>
              <FieldCard initData={testData[1]} cardNumber={1} />
            </Col>

          </Row>
        </Container>
      </Stack>
      {/* </Stack> */}











    </div>
  );
}

export default App;
