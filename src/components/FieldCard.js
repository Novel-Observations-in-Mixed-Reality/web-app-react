import React, { useState } from 'react';
import { InputGroup, FormControl, Form, Container, Row, Col, Card, Accordion, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import '../index.css';

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
    let key = idSep[2] + idSep[3].charAt(0).toUpperCase() + idSep[3].slice(1);
    let temp = fieldData.map((field) => {
      if (field.fieldID === parseInt(idSep[idSep.length - 1])) {
        field[key] = e.currentTarget.value;
      }
      return field;
    })
    ptclData.fieldData = temp;
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
        <Accordion.Item key={id} eventKey={id.toString()}>
          <Accordion.Button className='h6 mb-0 text-capitalize' data-index={id - 1} onClick={handleToggle}>
            {field.fieldName + ' Field'}
          </Accordion.Button>
          <Accordion.Body>
            <DropdownButton className="mb-2 gen-dd"
              title={'E = ' + eqs[fieldData[id - 1].currGenEq]}
              onSelect={handleEq}
            >
              <Dropdown.Item eventKey={eqs[0]}>{'E = ' + eqs[0]}</Dropdown.Item>
              <Dropdown.Item eventKey={eqs[1]}>{'E = ' + eqs[1]}</Dropdown.Item>
              <Dropdown.Item eventKey={eqs[2]}>{'E = ' + eqs[2]}</Dropdown.Item>
            </DropdownButton>

            <Container className="m-0 p-0">
              <Row>

                <Col className="" md={6}>
                  <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="eq-input-text">a</InputGroup.Text>
                    <FormControl className="text-center" type="number" aria-label="Small" defaultValue={currFieldData.genVal1} aria-describedby="inputGroup-sizing-sm"
                      id={ptclData.particle + "-" + ptclData.ptclID + "-gen-val1-field-" + id}
                      onChange={handleValueChange}
                    />
                  </InputGroup>
                </Col>

                <Col md={6}>
                  <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="eq-input-text">b</InputGroup.Text>
                    <FormControl className="text-center" type="number" aria-label="Small" defaultValue={currFieldData.genVal2} aria-describedby="inputGroup-sizing-sm"
                      id={ptclData.particle + "-" + ptclData.ptclID + "-gen-val2-field-" + id}
                      onChange={handleValueChange}
                    />
                  </InputGroup>
                </Col>

                <Col md={6}>
                  <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="eq-input-text">c</InputGroup.Text>
                    <FormControl className="text-center" type="number" ria-label="Small" defaultValue={currFieldData.genVal3} aria-describedby="inputGroup-sizing-sm"
                      id={ptclData.particle + "-" + ptclData.ptclID + "-gen-val3-field-" + id}
                      onChange={handleValueChange}
                    />
                  </InputGroup>
                </Col>

                <Col md={6}>
                  <InputGroup size="sm" className="mb-2">
                    <InputGroup.Text className="eq-input-text">d</InputGroup.Text>
                    <FormControl className="text-center" type="number" aria-label="Small" defaultValue={currFieldData.genVal4} aria-describedby="inputGroup-sizing-sm"
                      id={ptclData.particle + "-" + ptclData.ptclID + "-gen-val4-field-" + id}
                      onChange={handleValueChange}
                    />
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
                <FormControl id={ptclData.particle + "-" + ptclData.ptclID + "-react-val1-field-" + id} className="text-center" type="number" aria-label="Small" defaultValue={currFieldData.reactVal1} aria-describedby="inputGroup-sizing-sm"
                      onChange={handleValueChange}
                />
              </InputGroup>

            </Container>
          </Accordion.Body>
        </Accordion.Item>
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
                    <Button variant="outline-secondary" id="button-addon1">-</Button>
                    <FormControl
                      className="text-center"
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                      defaultValue={ptclData.mag}
                      onChange={(e) => {
                        ptclData.mag = e.currentTarget.value;
                        valueChangeCallback(ptclData);
                      }}
                    />
                    <Button variant="outline-secondary" id="button-addon1">+</Button>
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