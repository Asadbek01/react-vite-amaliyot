import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalInput from './Modal';
import { MyNavbar } from 'react-bootstrap';

function CardComp({ data }) {
	console.log(CardComp);
	
	return (
		<>
		<MyNavbar />
			<ModalInput />
			<div className='container d-flex flex-wrap gap-3'>
				{data.map(val => {
					console.log(val);

					return (
						<>
							<Card key={val.key || index}style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='https://mdbootstrap.com/img/Photos/Others/water-lily.jpg'
								/>
								<Card.Body>
									<Card.Title>{val.firstName}</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
									<Button variant='primary'>Go somewhere</Button>
								</Card.Body>
							</Card>
						</>
					);
				})}
			</div>
		</>
	);
}

export default CardComp;
