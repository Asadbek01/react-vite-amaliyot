import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComp({ data }) {
	return (
		<>

			<div className='container d-flex flex-wrap gap-3'>
				{data.map(val => {
					console.log(val);

					return (
						<>
							<Card style={{ width: '18rem' }}>
								<Card.Img
									variant='top'
									src='https://mdbootstrap.com/img/Photos/Others/water-lily.jpg'
								/>
								<Card.Body>
									<Card.Title>{val.firstName}</Card.Title>
									<Card.Text>
										{val.lastName}
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
