import React, { useState } from 'react';
import { InputGroup, FormControl, Form, Container, Row, Col, Card, Accordion, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import '../index.css';

const eqs = ['q (a r^b + c)', 'a q log_b(cr + d)', 'a q v'];
const data = [
  { "fieldName": "Magnetic", "currGenEq": 0, "genVal1": 1, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Electric", "currGenEq": 1, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  //{ "fieldName": "Mlectric", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  // { "fieldName": "Xagnetic", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },

];

export default function FieldCard({ initData, cardNumber }) {

  const [fieldData, updateFD] = useState(initData.fieldData);

  const [index, updateIndex] = useState(0);

  const handleEq = (value) => {
    let temp = fieldData.slice();
    console.log(temp)
    temp[index].currGenEq = eqs.indexOf(value);
    updateFD(temp);
  };

  const handleToggle = (event) => {
    // console.log(fieldData)
    updateIndex(event.target.dataset.index);
  };


  //console.log(cardNumber);

  let fieldAccordions = fieldData.map((field, idx) => {

    let index = fieldData.findIndex(obj => obj.fieldName === field.fieldName);
    // console.log(index);
    // console.log(field)
    return (
      <Accordion.Item key={idx} eventKey={index.toString()}>
        <Accordion.Button className='h6 mb-0' data-index={index} onClick={handleToggle}>
          {field.fieldName + ' Field'}
        </Accordion.Button>
        <Accordion.Body>
          <DropdownButton className="mb-2 gen-dd" title={'E = ' + eqs[field.currGenEq]} onSelect={handleEq}>
            <Dropdown.Item eventKey={eqs[0]}>{'E = ' + eqs[0]}</Dropdown.Item>
            <Dropdown.Item eventKey={eqs[1]}>{'E = ' + eqs[1]}</Dropdown.Item>
            <Dropdown.Item eventKey={eqs[2]}>{'E = ' + eqs[2]}</Dropdown.Item>
          </DropdownButton>

          <Container className="m-0 p-0">
            <Row>
              <Col className="" md={6}>
                <InputGroup size="sm" className="mb-2">
                  <InputGroup.Text className="eq-input-text">a</InputGroup.Text>
                  <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              </Col>
              <Col md={6}>
                <InputGroup size="sm" className="mb-2">
                  <InputGroup.Text className="eq-input-text">b</InputGroup.Text>
                  <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              </Col>
              <Col md={6}>
                <InputGroup size="sm" className="mb-2">
                  <InputGroup.Text className="eq-input-text">c</InputGroup.Text>
                  <FormControl type="number" ria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              </Col>
              <Col md={6}>
                <InputGroup size="sm" className="mb-2">
                  <InputGroup.Text className="eq-input-text">d</InputGroup.Text>
                  <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
              </Col>
            </Row>
          </Container>

          <DropdownButton className="mb-2 react-dd" title={'F = A q E'}>
            <Dropdown.Item eventKey={'A q E'}>{'F = A q E'}</Dropdown.Item>
          </DropdownButton>
          <Container className="m-0 p-0">

          <InputGroup size="sm" >
            <InputGroup.Text className="eq-input-text">A</InputGroup.Text>
            <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>

          </Container>
        </Accordion.Body>
      </Accordion.Item>
    )
  });

  return (
    <Card border="secondary" style={{ width: 'auto' }} className="mb-3">
      <Card.Body>
        <Card.Title className="text-center text-capitalize">{initData.particle + " Charge"}</Card.Title>

        <Form>
          {/*
          <Form.Group className="mb-3" controlId="magnitude">
            <Form.Label className="col-md-7">Magnitude</Form.Label> */}

          <Container className="p-0">
            <Row>
              <Col md={5} lg={5}><label className="h6" htmlFor="magnitude">Magnitude</label></Col>

              <Col md={7} lg={7}>
                <div>
                  <InputGroup id="magnitude" className="mb-3 col-md-5">
                    <Button variant="outline-secondary" id="button-addon1">-</Button>
                    <FormControl
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                    />
                    <Button variant="outline-secondary" id="button-addon1">+</Button>
                  </InputGroup>
                </div>

              </Col>
            </Row>
          </Container>
          <Accordion defaultActiveKey="0">
            {fieldAccordions}
          </Accordion>
        </Form>
      </Card.Body>
    </Card>
  )
}