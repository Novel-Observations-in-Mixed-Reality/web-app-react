import '../App.css';
import React, { useState } from 'react';
import { Form, Button, ButtonGroup, InputGroup, FormControl, ToggleButton } from 'react-bootstrap';
import $ from 'jquery';

export default function Customization({ fieldList, cardCallBack, fieldAddCallback, fieldCheckCallback }) {

  const [radioValue, setRadioValue] = useState("positive");

  const handleChargeProp = (e) => {
    let selected = $('#charge-select input:radio:checked').val();
    if (selected !== "cus") {
      cardCallBack(selected);
    }
    else {
      cardCallBack($('#cname-input input').val());
    }
  }

  let fieldChecks = fieldList.map((field) => {
    return (
      <Form.Check
        key={field.fieldID}
        type="switch"
        id={"switch-" + field.fieldID}
        label={field.fieldName}
        className='text-capitalize'
        checked={!field.disabled}
        onChange={fieldCheckCallback}
      />
    )
  });

  return (
    <>
      <h5 className="mb-3">Create New Charge</h5>
      <ButtonGroup id="charge-select" className="mb-3 d-flex">

        <ToggleButton className="m-0 "
          key={1}
          id={`radio-${1}`}
          type="radio"
          variant="outline-primary"
          value={"positive"}
          checked={radioValue === "positive"}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {"Positive"}
        </ToggleButton>

        <ToggleButton
          key={2}
          id={`radio-${2}`}
          type="radio"
          variant="outline-danger"
          value={"negative"}
          checked={radioValue === "negative"}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {"Negative"}
        </ToggleButton>

        <ToggleButton
          key={3}
          id={`radio-${3}`}
          type="radio"
          variant="outline-dark"
          value={"cus"}
          checked={radioValue === "cus"}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {"Custom"}
        </ToggleButton>
      </ButtonGroup>

      <InputGroup id="cname-input" className="mb-3 pb-3">
        <FormControl
          placeholder="Custom Name"
          aria-label="Custom Name"
          aria-describedby="basic-addon2"
          disabled={radioValue === "cus" ? false : true}
        />
        <Button variant="primary" id="button-addon2" onClick={handleChargeProp}>
          Add
        </Button>
      </InputGroup>

      <h5 className="mb-3">Create New Field</h5>
      <InputGroup id="field-input" className="mb-3">
        <FormControl
          placeholder="Custom Field"
          aria-label="Custom Field"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2" onClick={e => fieldAddCallback($('#field-input input').val())}>
          Add
        </Button>
      </InputGroup>

      <Form>
        {fieldChecks}
      </Form>
    </>
  );
}