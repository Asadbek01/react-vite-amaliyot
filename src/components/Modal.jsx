import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalInput() {
	const [show, setShow] = useState(false);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastname] = useState('');
	const [email, setEmail] = useState('');

	const handleClose = () => {
		setShow(false);

		const data = { firstName, lastName, email };
		postData(data);
	};

	const handleShow = () => setShow(true);

	async function postData(data) {
		console.log(data);

		try {
			const response = await axios.post(
				'https://task-dev-kom.vercel.app/api/add-user',
				data
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>First Name </Form.Label>
							<Form.Control
								type='email'
								autoFocus
								onChange={e => setFirstName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type='email'
								autoFocus
								onChange={e => setLastname(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								autoFocus
								onChange={e => setEmail(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={handleClose}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalInput;
