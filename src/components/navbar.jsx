import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import ModalInput from "../components/Modal"

function MyNavbar() {
    
  return (
    <>
    <Container>
        <Navbar className="bg-body-tertiary justify-content-between">
        <Form inline>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#home">User-cards</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
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
        </Navbar>
        </Form>
        <Form inline>
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                />
            </Col>
            <Col xs="auto">
            <ModalInput />
            </Col>
            </Row>
        </Form>
        </Navbar>
    </Container>


</>
  );
}

export default MyNavbar;