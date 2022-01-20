import React from 'react';
import { InputGroup, FormControl, Container, Row, Col, Accordion, DropdownButton, Dropdown } from 'react-bootstrap';
import '../index.css';

const eqs = ['q (a r^b + c)', 'a q log_b(cr + d)', 'a q v'];

export default function Field({ fieldID, fieldName, ptclData, currFieldData, handleToggleCallback, handleEqCallback, fieldValueCallback }) {

  let valList = ["a", "b", "c", "d"].map((e, idx) => {
    return (
      <Col key={idx} md={6}>
        <InputGroup size="sm" className="mb-2">
          <InputGroup.Text className="eq-input-text">
            {e}
          </InputGroup.Text>
          <FormControl
            className="text-center float-input"
            type="text"
            inputMode="numeric"
            aria-label="Small"
            defaultValue={currFieldData["genVal" + (idx + 1)]}
            aria-describedby="inputGroup-sizing-sm"
            id={ptclData.particle + "-" + ptclData.ptclID + "-gen-val" + (idx + 1) + "-field-" + fieldID}
            onChange={fieldValueCallback}
          />
        </InputGroup>
      </Col>
    )
  })

  return (
    <Accordion.Item eventKey={fieldID.toString()}>
      <Accordion.Button className='h6 mb-0 text-capitalize' data-index={fieldID - 1} onClick={handleToggleCallback}>
        {fieldName + ' Field'}
      </Accordion.Button>
      <Accordion.Body>
        <DropdownButton className="mb-2 gen-dd"
          title={'E = ' + eqs[currFieldData.currGenEq]}
          onSelect={handleEqCallback}
        >
          <Dropdown.Item eventKey={eqs[0]}>{'E = ' + eqs[0]}</Dropdown.Item>
          <Dropdown.Item eventKey={eqs[1]}>{'E = ' + eqs[1]}</Dropdown.Item>
          <Dropdown.Item eventKey={eqs[2]}>{'E = ' + eqs[2]}</Dropdown.Item>
        </DropdownButton>

        <Container className="m-0 p-0">
          <Row>
            {valList}
          </Row>
        </Container>

        <DropdownButton className="mb-2 react-dd" title={'F = A q E'}>
          <Dropdown.Item eventKey={'A q E'}>{'F = A q E'}</Dropdown.Item>
        </DropdownButton>
        <Container className="m-0 p-0">

          <InputGroup size="sm" >
            <InputGroup.Text className="eq-input-text">A</InputGroup.Text>
            <FormControl id={ptclData.particle + "-" + ptclData.ptclID + "-react-val1-field-" + fieldID} className="text-center float-input" type="number" aria-label="Small" defaultValue={currFieldData.reactVal1} aria-describedby="inputGroup-sizing-sm"
              onChange={fieldValueCallback}
            />
          </InputGroup>

        </Container>
      </Accordion.Body>
    </Accordion.Item>
  )
}