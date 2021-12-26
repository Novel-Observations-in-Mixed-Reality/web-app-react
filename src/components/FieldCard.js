import React, { useState } from 'react';
import { InputGroup, FormControl, Form, Container, Row, Col, Card, Accordion, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import '../index.css';

import testData from '../data/testData.json';

const eqs = ['q (a r^b + c)', 'a q log_b(cr + d)', 'a q v'];
const data = [
  { "fieldName": "Magnetic", "currGenEq": 0, "genVal1": 1, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fieldName": "Electric", "currGenEq": 1, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  //{ "fieldName": "Mlectric", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  // { "fieldName": "Xagnetic", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },

];

export default function FieldCard({ initData, cardNumber }) {


  const [fieldData, updateFD] = useState(data);

  const [index, updateIndex] = useState(0);
  // console.log(initData);
  console.log(fieldData)

  //console.log(testData)

  const handleEq = (value) => {
    let temp = data.slice();
    temp[index].currGenEq = eqs.indexOf(value);
    updateFD(temp);
  };

  const handleToggle = (event) => {
    console.log(event.target.dataset.index)
    console.log(fieldData)
    updateIndex(event.target.dataset.index);
  };


  //console.log(cardNumber);

  let fieldAccordions = fieldData.map((field) => {

    let index = fieldData.findIndex(obj => obj.fieldName === field.fieldName);
    // console.log(index);
    // console.log(field)
    return (
      <Accordion.Item eventKey={index.toString()}>
        {/* <Accordion.Header bsPrefix='' index={index} onClick={(event) => console.log(event.target)}>
          {field.fieldName + ' Field'}
        </Accordion.Header> */}
        <Accordion.Button data-index={index} onClick={handleToggle}>
          <h6 className='mb-0'>{field.fieldName + ' Field'}</h6>
        </Accordion.Button>
        <Accordion.Body>
          <DropdownButton className="mb-2 gen-dd" title={'E = ' + eqs[field.currGenEq]} onSelect={handleEq}>
            <Dropdown.Item eventKey={eqs[0]}>{'E = ' + eqs[0]}</Dropdown.Item>
            <Dropdown.Item eventKey={eqs[1]}>{'E = ' + eqs[1]}</Dropdown.Item>
            <Dropdown.Item eventKey={eqs[2]}>{'E = ' + eqs[2]}</Dropdown.Item>
          </DropdownButton>

          <DropdownButton className="mb-2 react-dd" title={'F = A q E'}>
            <Dropdown.Item eventKey={'A q E'}>{'F = A q E'}</Dropdown.Item>
          </DropdownButton>
        </Accordion.Body>
      </Accordion.Item>
    )
  });

  return (
    <Card border="secondary" style={{ width: 'auto' }} className="mb-3">
      <Card.Body>
        <Card.Title>Positive Charge</Card.Title>

        <Form>
          {/*
          <Form.Group className="mb-3" controlId="magnitude">
            <Form.Label className="col-md-7">Magnitude</Form.Label> */}

          <Container className="p-0">
            <Row>
              <Col md={7} lg={6}><label for="magnitude"><h6>Magnitude</h6></label></Col>

              <Col md={5} lg={6}>
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