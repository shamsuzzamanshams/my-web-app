import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreApp, removeApp } from '../../Utility/dataBase';
import SingleApp from '../SingleApp/SingleApp';
import ShowInstallApp from '../ShowInstallApp/ShowInstallApp';
 import { ToastContainer, toast } from 'react-toastify';

const Installation = () => {
	const data = useLoaderData();
	const [installedAppList, setInstalledAppList] = useState([]);
	const [sort, setSort] = useState('')

	const handleUninstall = (id) => {
		removeApp(id);

		
		const updated = installedAppList.filter(app => app.id !== id);
		setInstalledAppList(updated);
		toast("Remove From Installed List");
	};

	useEffect(() => {
		const storedAppIds = getStoreApp();
		const convertedIds = storedAppIds.map(id => parseInt(id));

		const installedApps = data.filter(app => convertedIds.includes(app.id));
		setInstalledAppList(installedApps);
	}, [data]);

	const handleSort = (type) => {
		setSort(type);
		if (type === "low-high") {
			const sortbylowtohigh = [...installedAppList].sort((a, b) => a.downloads - b.downloads);
			setInstalledAppList(sortbylowtohigh);
		}
		if (type === "high-low") {
			const sortbyhightolow = [...installedAppList].sort((a, b) => b.downloads - a.downloads);
			setInstalledAppList(sortbyhightolow);
		}
	}

	return (
		<div>
			<div className='text-center mt-20'>
				<h3 className='text-3xl font-bold mb-4'>Your Installed Apps</h3>
				<p>Explore All Trending Apps on the Market developed by us</p>
			</div>

			<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-10 px-4'>
				<h3 className='font-bold'>({installedAppList.length}) Apps Found</h3>
				<details className="dropdown">
					<summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
					<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
						<li><a onClick={() => handleSort("low-high")}>Low-High</a></li>
						<li><a onClick={() => handleSort("high-low")}>High-Low</a></li>
					</ul>
				</details>
			</div>

			{installedAppList.length === 0 ? (
				<p className='text-center mt-10 text-gray-500'>No installed apps found</p>
			) : (
				<div className='mt-10'>
					{installedAppList.map(singleapp => (
						<ShowInstallApp key={singleapp.id} singleapp={singleapp} onUninstall={handleUninstall}></ShowInstallApp>
					))}
				</div>
			)}
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Installation;