import { useEffect, useState } from 'react';
import CardComp from './components/cardComp';
import axios from 'axios';
import Header from './components/header';

function App() {
	const [data, setData] = useState([]);
	async function getData() {
		try {
			const response = await axios.get(
				'https://task-dev-kom.vercel.app/api/all-user'
			);

			setData(response.data);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<Header />
			<CardComp data={data} />
		</>
	);
}

export default App;
