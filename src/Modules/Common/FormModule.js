import React, { useState } from 'react'

import { Form } from 'react-bootstrap';

function FormModule({data,updateData}) {


	const [formData, setFormData] = useState(data);

	const handleChange = (e) => {
	  const { id, value } = e.target;
	  const updatedFormData = {
		...data,
		[id]: value
	  };
	  setFormData(updatedFormData);
	  updateData(updatedFormData);
	};
  


  return (
	<>
		<p>
			Hello this is a module
		</p>

		<Form.Group className="input-group mb-2"  controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  
            defaultValue={formData.email}
            onChange={handleChange} />
        </Form.Group>

        <Form.Group className="input-group mb-2"  controlId="img">
            <Form.Label>Image</Form.Label>
            <Form.Control placeholder="url" 
            defaultValue={formData.img}
            onChange={handleChange} />
          </Form.Group>

		

	</>
	
  )
}

export default FormModule