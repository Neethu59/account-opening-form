import React from 'react'
import { Form } from 'react-bootstrap'

export default function Formdata(props) {
  return (
    <>
     <Form.Group className="mb-3" >
     <Form.Label className="formlabel">{props.formlabel}</Form.Label>
     <Form.Control type="text"  />
    </Form.Group>
    
    
    </>
  )
}
