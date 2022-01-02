import '../App.css';
import React, { useState } from 'react';
import FieldCard from './FieldCard';
import { Container, Row, Col, Button, Offcanvas, Stack } from 'react-bootstrap';
import Customization from './Customization';
import $ from 'jquery';

import testData from '../data/testData.json';

const data = [
  { "fieldName": "Magnetic", "currGenEq": 0, "genVal1": 1, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Electric", "currGenEq": 1, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Mlectric", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Xagnetic", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },

];

function App({ initialData }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //field checking logic later
  const [fieldList, updateFieldList] = useState(['Electric', 'Magnetic']);

  const [currData, updateData] = useState(initialData);

  console.log(currData);

  let cards = currData.map(function (e, idx) {
    return (
      <Col md={6} lg={4} key={idx}>
        <FieldCard initData={e} cardNumber={idx} />
      </Col>
    )
  });

  const handleCardAdd = (cname) => {
    let temp = currData.slice();
    temp.push(initNewCard(cname, fieldList));
    updateData(temp);
  };

  return (

    <div classame="App">

      <Stack>

        <div className="d-flex">
          <Button id="custom" className="" onClick={handleShow}>
            <img id="icon" src="sliders.svg" alt="Customize" />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Customization</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-4">
              <Customization cardCallBack={handleCardAdd} />
            </Offcanvas.Body>
          </Offcanvas>

          <Container className=" p-0 mx-0 font-weight-bold">
            <span id="title" className="font-weight-bold">NOMR Initialization</span>
          </Container>
        </div>

        <Container id="card-field" fluid className="mt-2 px-lg-0">
          <Row className="mx-lg-5" >
            {cards}
          </Row>
        </Container>
      </Stack>

    </div>
  );
}

function initNewCard(cname, fieldList) {
  let fieldData = fieldList.map((field) => {
    return (
      {
        "fieldName": field,
        "currGenEq": 0,
        "genVal1": 0,
        "genVal2": 0,
        "genVal3": 0,
        "genVal4": 0,
        "reactVal1": 0
      }
    )
  }
  );

  return (
    {
      "particle": cname,
      "mag": 0,
      "fieldData": fieldData
    });
}

export default App;
