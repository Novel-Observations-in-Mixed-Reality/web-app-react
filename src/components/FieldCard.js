import React, { useState } from 'react';
import { InputGroup, FormControl, Form, Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import $ from 'jquery';

import '../index.css';
import Field from './Field'

const eqs = ['q (a r^b + c)', 'a q log_b(cr + d)', 'a q v'];

export default function FieldCard({ fieldList, ptclData, defaultActiveKey, valueChangeCallback }) {

  const [fieldData, updateFD] = useState(ptclData.fieldData);

  const [index, updateIndex] = useState(0);

  const handleEq = (value) => {
    let temp = fieldData.slice();
    temp[index].currGenEq = eqs.indexOf(value);
    updateFD(temp);
  };

  const handleToggle = (event) => {
    updateIndex(event.target.dataset.index);
  };

  const handleValueChange = (e) => {
    let idSep = e.currentTarget.id.split('-');
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.-]/g, '')
      .replace(/(\..*?)\..*/g, '$1');
    if (e.currentTarget.value === "") {
      e.currentTarget.value = "0";
    }
    console.log(e.currentTarget.value)
    let key = idSep[2] + idSep[3].charAt(0).toUpperCase() + idSep[3].slice(1);
    ptclData.fieldData = fieldData.map((field) => {
      if (field.fieldID === parseInt(idSep[idSep.length - 1])) {
        field[key] = e.currentTarget.value;
      }
      return field;
    })
    valueChangeCallback(ptclData);
  }

  let fieldAccordions = fieldList.map((field, idx) => {
    let id = field.fieldID;
    if (fieldData.length < id) {
      fieldData.push({
        "fieldID": id,
        "currGenEq": 0,
        "genVal1": "0",
        "genVal2": "0",
        "genVal3": "0",
        "genVal4": "0",
        "reactVal1": "0"
      });
    }

    let currFieldData = fieldData.filter(currField => currField.fieldID === id)[0];

    if (!field.disabled) {
      return (
        <Field
          key={id}
          fieldID={id}
          fieldName={field.fieldName}
          ptclData={ptclData}
          currFieldData={currFieldData}
          handleToggleCallback={handleToggle}
          handleEqCallback={handleEq}
          fieldValueCallback={handleValueChange}
        />
      )
    }
    return (<React.Fragment key={id}></React.Fragment>)
  });

  console.log(fieldData)
  return (
    <Card border="secondary" style={{ width: 'auto' }} className="mb-3">
      <Card.Body>
        <Card.Title className="text-center text-capitalize">{ptclData.particle + " Charge " + ptclData.ptclID}</Card.Title>

        <Form>

          <Container className="p-0">
            <Row>
              <Col md={5} lg={5}><label className="h6" htmlFor="magnitude">Magnitude</label></Col>

              <Col md={7} lg={7}>
                <div>
                  <InputGroup id="magnitude" className="mb-3 col-md-5">
                    <Button variant="outline-secondary" id="button-addon1" onClick={e => console.log(typeof $("#" + ptclData.particle + "-" + ptclData.ptclID + "mag").val())}>-</Button>
                    <FormControl
                      className="text-center float-input"
                      id={ptclData.particle + "-" + ptclData.ptclID + "mag"}
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                      type="text"
                      inputMode="numeric"
                      defaultValue={ptclData.mag}
                      onChange={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.-]/g, '').replace(/(\..*?)\..*/g, '$1');
                        if (e.currentTarget.value === "") {
                          e.currentTarget.value = "0";
                        }
                        ptclData.mag = e.currentTarget.value;
                        valueChangeCallback(ptclData);
                      }}
                    />
                    <Button variant="outline-secondary" id="button-addon1" onClick={e => console.log($("#" + ptclData.particle + "-" + ptclData.ptclID + "mag").val())}>+</Button>
                  </InputGroup>
                </div>

              </Col>
            </Row>
          </Container>
          {/* {TODO: implement changing activeDefaultKey} */}
          <Accordion defaultActiveKey={defaultActiveKey.toString()}>
            {fieldAccordions}
          </Accordion>
        </Form>
      </Card.Body>
    </Card>
  )
}