import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import FieldCard from './FieldCard';
import { Container, Row, Col, Stack } from 'react-bootstrap';


function App() {
  return (
    <div classame="App">

      <Container fluid>

        <Row >

          <Col md={6} lg={4}>
            <FieldCard />
          </Col>
          <Col md={6} lg={4}>
            <FieldCard />
          </Col>
          <Col md={6} lg={4}>
            <FieldCard />
          </Col>
          <Col md={6} lg={4}>
            <FieldCard />
          </Col>
          <Col md={6} lg={4}>
            <FieldCard />
          </Col>


        </Row>
        {/* <FieldCard /><FieldCard /><FieldCard /><FieldCard /> */}
      </Container>

    </div>
  );
}

export default App;
