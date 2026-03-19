import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp } from '../../Utility/dataBase';
import SingleApp from '../SingleApp/SingleApp';

const Installation = () => {
	const data = useLoaderData();
	const [installedAppList, setInstalledAppList] = useState([]);

	useEffect(() => {
		const storedAppIds = getStoreApp();
		const convertedIds = storedAppIds.map(id => parseInt(id));

		const installedApps = data.filter(app => convertedIds.includes(app.id));
		setInstalledAppList(installedApps);
	}, [data]);

	return (
		<div>
			<div className='text-center mt-20'>
				<h3 className='text-3xl font-bold mb-4'>Your Installed Apps</h3>
				<p>Explore All Trending Apps on the Market developed by us</p>
			</div>

			<div className='flex justify-between items-center mt-10'>
				<h3 className='font-bold'>({installedAppList.length}) Apps Found</h3>
				<details className="dropdown">
					<summary className="btn m-1">Sort By</summary>
					<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
						<li><a >Low-High</a></li>
						<li><a >High-Low</a></li>
					</ul>
				</details>
			</div>

			{installedAppList.length === 0 ? (
				<p className='text-center mt-10 text-gray-500'>No installed apps found</p>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
					{installedAppList.map(singleapp => (
						<SingleApp key={singleapp.id} singleapp={singleapp} />
					))}
				</div>
			)}
		</div>
	);
};

export default Installation;