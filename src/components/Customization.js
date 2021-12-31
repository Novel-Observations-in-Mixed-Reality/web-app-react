import '../App.css';
import React, { useState } from 'react';
import FieldCard from './FieldCard';
import { Container, Row, Col, Button, ButtonGroup, Stack, ToggleButton } from 'react-bootstrap';

export default function Customization() {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>
      {/* <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <br /> */}
      <ButtonGroup>

        <ToggleButton
          key={1}
          id={`radio-${1}`}
          type="radio"
          variant="outline-primary"
          name="radio"
          value={1}
          checked={radioValue === "1"}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {"Positive"}
        </ToggleButton>

        <ToggleButton
          key={2}
          id={`radio-${2}`}
          type="radio"
          variant="outline-danger"
          name="radio"
          value={2}
          checked={radioValue === "2"}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {"Negative"}
        </ToggleButton>

        <ToggleButton
          key={3}
          id={`radio-${3}`}
          type="radio"
          variant="outline-dark"
          name="radio"
          value={3}
          checked={radioValue === "3"}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {"Custom"}
        </ToggleButton>
      </ButtonGroup>

    </>
  );
}