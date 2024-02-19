import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Formdata from '../Component/Formdata';

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
  const navigate=useNavigate()

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


//   const handleFileChange = (e, fieldName) => {

//     const file = e.target.files[0];
// const formData=new FormData()
// formData.append('image',file)
// axios.post("http://localhost:6000/upload").then(res=>{
//   console.log(res);
// })
    
//     setState((prevState) => ({
//       ...prevState,
//       documents: {
//         ...prevState.documents,
//         [fieldName]: file,
//       },
//     }));
//   };
const handleFileChange = async (e, fieldName) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('image', file);

  try {
      const response = await axios.post("http://localhost:6000/upload", formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      console.log(response);
  } catch (error) {
      console.error('Error uploading file:', error);
  }
};
const handleSubmit=(e)=>{
  console.log(state);
e.preventDefault()
// axios.post("http://localhost:6000/createaccount",state).then(res=>{
//   console.log(res);
// })

}

const handlenext=()=>{
  navigate('/next')
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
                <Form.Control type="text" placeholder="" name="holdername" value={state.holdername} required  onChange={handleInputChange} />
              </Form.Group>
              
              {/* <Formdata formlabel="ACCOUNT HOLDER NAME" /> */}
              <Form.Group className="mb-3">
                <Form.Label className="formlabel">ACCOUNT NUMBER</Form.Label>
                <Form.Control type="number" placeholder="" name="accountnumber" value={state.accountnumber} required onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="formlabel">DATE OF BIRTH</Form.Label>
                <Form.Control type="date" placeholder="" name="dob" value={state.dob} required onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label className="formlabel">IDENTIFICATION TYPE</Form.Label>
                <Form.Control as="select" value={state.identificationType} onChange={handleInputChange} name="identificationType"required>
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
            onChange={handleInputChange} required
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="gender"
            value="female"
            checked={state.gender === 'female'}
            onChange={handleInputChange} required
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="gender"
            value="other"
            checked={state.gender === 'other'}
            onChange={handleInputChange} required
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
                  <Form.Control type="file" name="image" id="photo" onChange={(e) => handleFileChange(e, 'image')} required/>
                 </div>
              </Form.Group>
            </Form>
            <Button className="mb-3" variant="success"onClick={handleSubmit}>
              SUBMIT
            </Button>{' '}
            <Button className="mb-3" variant="success"onClick={handlenext}>
              NEXT
            </Button>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
}

