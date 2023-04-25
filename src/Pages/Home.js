import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../Core/Layout'
import FirebaseRead from '../Modules/Common/FirebaseRead'

function Home() {
  return (
	<Layout>
		<Container className='mt-5'>
			<Row>
				<Col>
					<h1>Home</h1>
					<p className="lead">Welcome</p>
					<FirebaseRead db_name={'testing'}/>
				</Col>
			</Row>
		</Container>
	</Layout>
  )
}

export default Home