import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalInput from './Modal';
import { Card } from 'react-bootstrap';

function Header() {
    return (
        <Navbar className="bg-body-tertiary justify-content-between">
            <Form inline>
                <InputGroup>
                    <Card.Text id="basic-addon1"><h4>Users</h4></Card.Text>
                </InputGroup>
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
    );
}

export default Header;