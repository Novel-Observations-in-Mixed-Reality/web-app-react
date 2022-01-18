import '../App.css';
import React, { useState } from 'react';
import FieldCard from './FieldCard';
import { Container, Row, Col, Button, Offcanvas, Stack } from 'react-bootstrap';
import Customization from './Customization';

function App({ initialData }) {
  // let keyedData = Object.keys(initialData[0].particles).map

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fieldList, updateFieldList] = useState(initialData[0].fields);

  const [currData, updateData] = useState(initialData[0].particles);

  //TODO: implement implement changing activeDefaultKey
  let defaultActiveField = fieldList.find((field => field.disabled === false));

  console.log(currData);

  let ptclArray = [];
  Object.keys(currData).forEach((key) => {
    let temp = currData[key].map((ptcl) => { return {...ptcl, "particle": key}})
    ptclArray = ptclArray.concat(temp);
  });

  const handleValueUpdate = (updatedPtcl) => {
    let temp = {...currData};
    ptclArray.every((ptcl) => {
      if (ptcl.particle === updatedPtcl.particle) {
        temp[ptcl.particle] = temp[ptcl.particle].map((e) => {
          if (e.ptclID === updatedPtcl.ptclID) {
            return updatedPtcl;
          }
          return e;
        })
        return false;
      }
      return true;
    })
    updateData(temp);
  }

  let cards = ptclArray.map(function (e, idx) {
    return (
      <Col md={6} lg={4} key={idx}>
        <FieldCard
          fieldList={fieldList}
          ptclData={e}
          defaultActiveKey={defaultActiveField === undefined ? "1" : defaultActiveField.fieldID}
          valueChangeCallback={handleValueUpdate}
        />
      </Col>
    )
  });


  const handleCardAdd = (cname) => {
    if (!currData.hasOwnProperty(cname)) {
      currData[cname] = [];
    }
    let temp = {...currData};
    temp[cname].push(initNewCard(cname, temp[cname].length));
    updateData(temp);
  };

  const handleAddField = (fname) => {
    let temp = fieldList.slice();
    let notDupe = fieldList.every(field => fname.toLowerCase() !== field.fieldName.toLowerCase());
    if (notDupe) {
      temp.push({
        "fieldID": (fieldList.length + 1),
        "fieldName": fname
      })
    }
    updateFieldList(temp);
  };

  const handleCheckField = (e) => {
    let temp = fieldList.map((field) => {
      if (parseInt(e.target.id.split("-")[1]) === field.fieldID) {
        field.disabled = !field.disabled;
      }
      return field;
    })
    console.log(temp)
    updateFieldList(temp);
  };



  return (

    <div classame="App">

      <Stack>

        <div className="d-flex">
          <Button id="custom" className="" onClick={handleShow}>
            <img id="icon" src="sliders.svg" alt="Customize" />
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header className="" closeButton>
              <Offcanvas.Title className="title">Customization</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-4">
              <Customization
                fieldList={fieldList}
                cardCallBack={handleCardAdd}
                fieldAddCallback={handleAddField}
                fieldCheckCallback={handleCheckField}
              />
            </Offcanvas.Body>
          </Offcanvas>

          <Container className=" p-0 mx-0 font-weight-bold">
            <span className="font-weight-bold title">NOMR Initialization</span>
          </Container>
        </div>

        <Container id="card-field" fluid className="mt-2 px-lg-0">
          <Row className="mx-lg-5" >
            {cards}
          </Row>
        </Container>
      </Stack>

    </div>
  );
}

function initNewCard(cname, ptclID) {
  return (
    {
      "ptclID" : (ptclID + 1),
      "particle": cname,
      "mag": "1",
      "mass": "1",
      "radius": "1",
      "fieldData": []
    });
}

export default App;
