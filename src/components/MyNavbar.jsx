import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import ModalInput from '../components/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MyNavbar() {
	return (
		<Navbar className='bg-body-tertiary justify-content-between'>
			<Form inline>
				<InputGroup>
					<InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
					<Form.Control
						placeholder='Username'
						aria-label='Username'
						aria-describedby='basic-addon1'
					/>
				</InputGroup>
			</Form>
			<Form inline>
				<Row>
					<Col xs='auto'>
						<Form.Control
							type='text'
							placeholder='Search'
							className=' mr-sm-2'
						/>
					</Col>
					<Col xs='auto'>
						<ModalInput />
					</Col>
				</Row>
			</Form>
		</Navbar>
	);
}
