// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function EditModal({ userId, users }) {
	const [show, setShow] = useState(false);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastname] = useState('');
	const [email, setEmail] = useState('');

	const handleShow = () => {
		setShow(true);
		// console.log(users);
		// console.log(userId);

		let user = users.find(val => val._id === userId);
		setFirstName(user.firstName);
		setLastname(user.lastName);
		setEmail(user.email);
		// setShow(true);
	};

	async function Editdata() {
		try {
			const data = { firstName, lastName, email };
			console.log(data);
			const response = await axios.put(
				`https://task-dev-kom.vercel.app/api/update-user/${userId}`,
				data
			);
			if (response.status == 200) {
				setShow(false);
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<Button variant='outline-success' onClick={handleShow}>
				Edit
			</Button>

			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Fill In The Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>First Name </Form.Label>
							<Form.Control
								type='text'
								autoFocus
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type='text'
								autoFocus
								value={lastName}
								onChange={e => setLastname(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								autoFocus
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={Editdata} variant='outline-primary'>
						Update
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default EditModal;
