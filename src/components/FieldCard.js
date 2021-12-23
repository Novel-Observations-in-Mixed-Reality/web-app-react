import React from 'react';
import { InputGroup, FormControl, Form, Container, Row, Col, Card, Accordion, ButtonGroup, Button } from 'react-bootstrap';

export default function FieldCard() {
  return (
    <Card border="secondary" style={{ width: 'auto' }}>
      <Card.Body>
        <Card.Title>Positive Charge</Card.Title>

        <Form>
          {/*
          <Form.Group className="mb-3" controlId="magnitude">
            <Form.Label className="col-md-7">Magnitude</Form.Label> */}

          <Container className="p-0">
            <Row>
              <Col md={7} lg={6}><label for="magnitude">Magnitude</label></Col>

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


          {/* </Form.Group> */}

          {/* <div class="form-group row col-sm-12">
            <label for="atk-pc-up" class="col-md-7 col-form-label form-control-sm">
              <h5>Attack % Increase </h5>
            </label>
            <div class="input-group input-group-sm col-md-5">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" id="atk-pc-up-minus" onclick="minus('atk-pc-up')">−</button>
              </div>
              <input type="number" class="form-control text-center" id="atk-pc-up" value="0" onkeyup="update('atk-pc-up')"/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="atk-pc-up-plus" onclick="plus('atk-pc-up')">+</button>
                </div>
            </div>
          </div>
          <div class="form-group row col-sm-12">
            <input type="range" class="custom-range" id="atk-pc-up-slide" min="0" max="20" value="0" oninput="slide('atk-pc-up')"/>
          </div> */}

        </Form>






        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Electric Field</Accordion.Header>
            <Accordion.Body>
              Test
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Magnetic Field</Accordion.Header>
            <Accordion.Body>
              Test
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </Card.Body>
    </Card>
  )
}