import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../Core/Layout'

function Home() {
  return (
	<Layout>
		<Container className='mt-5'>
			<Row>
				<Col>
					<h1>Home</h1>
					<p className="lead">Welcome</p>
				</Col>
			</Row>
		</Container>
	</Layout>
  )
}

export default Home