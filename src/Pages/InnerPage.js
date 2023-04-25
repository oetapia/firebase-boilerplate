import React, { useCallback, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../Core/Layout'
import FormModule from '../Modules/Common/FormModule'
import FirebaseSubmit from '../Modules/Common/FirebaseSubmit'



function InnerPage() {

	const [formValues, setFormValues] = useState({});
	
	const handleSliderChange = useCallback((newValues) => {
		setFormValues((prevValues) => ({ ...prevValues, ...newValues }));
	  }, []);


	const db_name = ''

  return (
	<Layout>
		<Container className='mt-5'>
			<Row>
				<Col>
				
					<h1>Inner Page</h1>
					<p className="lead">Welcome</p>

					<FormModule data={formValues} updateData={handleSliderChange}></FormModule>
					
					<pre className="text-muted my-3">
						{JSON.stringify(formValues)}
					</pre>

					<FirebaseSubmit 
					data={formValues} 
					db_name={db_name? db_name : "testing"} 
					//patientId={patientId} 
					/>
				</Col>
			</Row>
		</Container>
	</Layout>
  )
}

export default InnerPage