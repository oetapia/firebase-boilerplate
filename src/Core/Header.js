import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';

// Replace logo for your own
import logo from '../img/logo.svg';

function Header() {
  return (
	 <Navbar bg="dark" variant="dark" expand="lg" > 
      <Container>
	  	<Link to="/">
			<Navbar.Brand>						
				<img src={logo} className="App-logo" height="48" alt="App logo" />
			</Navbar.Brand>
		</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

			<Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link as={Link} to="/page">Other Page</Nav.Link>

			
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header