import '../App.css';
import React from 'react';
import FieldCard from './FieldCard';
import { Container, Row, Col } from 'react-bootstrap';

const data = [
  { "fName": "Magnetic", "currGenEq": 0, "genVal1": 1, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  { "fName": "Electric", "currGenEq": 1, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  //{ "fieldName": "Mlectric", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },
  // { "fieldName": "Xagnetic", "currGenEq": 0, "genVal1": 0, "genVal2": 0, "genVal3": 0, "genVal4": 0, "reactVal1": 0 },

];

function App({ initialData }) {
  console.log(data)
  return (
    <div classame="App">

      <Container fluid>

        <Row >

          <Col md={6} lg={4}>
            <FieldCard initData={data} cardNumber={1}/>
          {/* </Col>
          <Col md={6} lg={4}>
            <FieldCard initData={data} cardNumber={2}/> */}
          {/* </Col>
          <Col md={6} lg={4}>
            <FieldCard />
          </Col>
          <Col md={6} lg={4}>
            <FieldCard />
          </Col>
          <Col md={6} lg={4}>
            <FieldCard /> */}
          </Col>


        </Row>
        {/* <FieldCard /><FieldCard /><FieldCard /><FieldCard /> */}
      </Container>

    </div>
  );
}

export default App;
