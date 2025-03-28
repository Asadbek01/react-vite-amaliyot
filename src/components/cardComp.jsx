import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import MyNavbar from './navbar';
import ModalInput from './Modal';

import EditModal from './Edit-modal';

function CardComp({ data }) {
	return (
		<>
			<MyNavbar />

			<div className='container d-flex flex-wrap gap-5'>
				{data.map(val => {
					return (
						<div key={val._id}>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='https://mdbootstrap.com/img/Photos/Others/water-lily.jpg'
								/>
								<Card.Body>
									<Card.Title>{val.firstName}</Card.Title>
									<Card.Text>{val.lastName}</Card.Text>
									<EditModal userId={val._id} users={data} />
									<Button className='m-2' variant='outline-danger'>
										Delete
									</Button>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default CardComp;
