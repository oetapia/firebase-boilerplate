import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../Core/Layout'
import FormModule from '../Modules/Common/FormModule'

function InnerPage() {
  return (
	<Layout>
		<Container className='mt-5'>
			<Row>
				<Col>
					<h1>Inner Page</h1>
					<p className="lead">Welcome</p>
					<FormModule></FormModule>
				</Col>
			</Row>
		</Container>
	</Layout>
  )
}

export default InnerPage