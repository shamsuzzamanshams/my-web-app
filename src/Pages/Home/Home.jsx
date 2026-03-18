import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import AllApps from '../allApps/AllApps';

const Home = () => {
	const data = useLoaderData();
	// console.log(data);
	
	return (
		<div>

			<Banner></Banner>
			<AllApps data={data}></AllApps>
		</div>
	);
};

export default Home;