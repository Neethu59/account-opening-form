import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  const [state, setState] = useState({
    holdername: '',
    accountnumber: '',
    dob: '',
    identificationType: '',
    gender: '',
    savings: {
      atm: false,
      checkbook: false,
      onlinebanking: false,
    },
    documents: {
      photo: null,
      idproof: null,
    },
    
  });

  const handleInputChange = (e) => {
    const { name, value, type,checked } = e.target;

    // For radio buttons
    if (type === 'radio') {
      console.log(value);
      setState((prevState) => ({
        ...prevState,
        [name]:e.target.value,
      }));
    } 
    // For checkboxes
    else if (type === 'checkbox') {
      setState((prevState) => ({
        ...prevState,
        savings: {
          ...prevState.savings,
          [name]: checked,
        },
      }));
    }
   
    else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  console.log(state);}
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setState((prevState) => ({
      ...prevState,
      documents: {
        ...prevState.documents,
        [fieldName]: file,
      },
    }));
  };

const handleSubmit=()=>{
  console.log(state);
}

  return (
    <>
      <Container>
        <Row className="justify-content-center bg-light mt-3  mb-5">
          <Col lg={8}>
            <h3 className="mt-3 newform">NEW ACCOUNT OPENING FORM</h3>
            <Form className="mt-3">
              <Form.Group className="mb-3" >
                <Form.Label className="formlabel">ACCOUNT HOLDER NAME</Form.Label>
                <Form.Control type="text" placeholder="" name="holdername" value={state.holdername} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="formlabel">ACCOUNT NUMBER</Form.Label>
                <Form.Control type="number" placeholder="" name="accountnumber" value={state.accountnumber} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="formlabel">DATE OF BIRTH</Form.Label>
                <Form.Control type="date" placeholder="" name="dob" value={state.dob} onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="formlabel">IDENTIFICATION TYPE</Form.Label>
                <Form.Control as="select" value={state.identificationType} onChange={handleInputChange} name="identificationType">
                  <option value="">Select Identification Type</option>
                  <option value="aadhar">Aadhar</option>
                  <option value="voterid">Voter ID</option>
                  <option value="drivinglicense">Driving License</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
        <Form.Label>GENDER</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Male"
            name="gender"
            value="male"
            checked={state.gender === 'male'}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="gender"
            value="female"
            checked={state.gender === 'female'}
            onChange={handleInputChange}
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="gender"
            value="other"
            checked={state.gender === 'other'}
            onChange={handleInputChange}
          />
        </div>
      </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="formlabel">SAVINGS</Form.Label>
                <div>
                  <Form.Check inline type="checkbox" label="ATM" name="atm" checked={state.savings.atm} onChange={handleInputChange} />
                  <Form.Check inline type="checkbox" label="Check book" name="checkbook" checked={state.savings.checkbook} onChange={handleInputChange} />
                  <Form.Check inline type="checkbox" label="Online banking" name="onlinebanking" checked={state.savings.onlinebanking} onChange={handleInputChange} />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="formlabel">Document Submission Types</Form.Label>
                <div>
                  <Form.Label htmlFor="photo" className="form-label">Photo</Form.Label>
                  <Form.Control type="file" name="photo" id="photo" onChange={(e) => handleFileChange(e, 'photo')} />
                  <Form.Label htmlFor="idproof" className="form-label">ID Proof</Form.Label>
                  <Form.Control type="file" id="idproof" onChange={(e) => handleFileChange(e, 'idproof')} />
                </div>
              </Form.Group>
            </Form>
            <Button className="mb-3" variant="success"onClick={handleSubmit}>
              SUBMIT
            </Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
}

