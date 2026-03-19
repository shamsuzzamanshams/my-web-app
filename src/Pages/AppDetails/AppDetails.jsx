import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ri from '../../assets/icon-ratings.png'
import di from '../../assets/icon-downloads.png'
import revi from '../../assets/icon-review.png'
import { Bar, CartesianGrid, ComposedChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoreDb, getStoreApp } from '../../Utility/dataBase';
import { ToastContainer, toast } from 'react-toastify';



const AppDetails = () => {
	const { id } = useParams();
	const appId = parseInt(id);
	const data = useLoaderData();
	const SingleApp = data.find(app => app.id === appId)
	// console.log(SingleApp);

	const { image, title, description, companyName, downloads, ratingAvg, reviews, size, ratings } = SingleApp;
	const handleInstall = id => {
		setIsInstalled(true);
		addToStoreDb(id);
		toast("Instalation Complete");
	}

	const [isInstalled, setIsInstalled] = useState(false);

	useEffect(() => {
		const storedApps = getStoreApp();

		
		const alreadyInstalled = storedApps.map(id => Number(id)).includes(Number(appId));

		setIsInstalled(alreadyInstalled);
	}, [appId]);
	return (
		<div>
			<div className='flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-20'>
				<div>
					<img className='h-48' src={image} alt="image" />
				</div>
				<div className='text-left space-y-2'>
					<div className='flex gap-x-2 mb-4'>
						<h3>{title}:</h3>
						<p>{description}</p>
					</div>

					<p>Developed by <span className='bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent'>{companyName}</span></p>
					<div className='border-t-2 border-gray-100'></div>
					<div className='flex items-center gap-10'>
						<div className=""><img className='w-10' src={di} alt="" />Downloads <br /> <span className='text-2xl font-bold'>{downloads}</span></div>
						<div className=""><img className='w-10' src={ri} alt="" />Ratings <br /> <span className='text-2xl font-bold'>{ratingAvg}</span></div>
						<div className=""><img className='w-10' src={revi} alt="" />Reviews <br /> <span className='text-2xl font-bold'>{reviews}</span></div>

					</div>
					<button
						onClick={() => handleInstall(id)}
						disabled={isInstalled}
						style={{backgroundImage: `linear-gradient(to bottom right, #22C55E, #16A34A, #047857)`}}
						className={`btn ${isInstalled ? 'btn-disabled' : 'btn-success'} text-white`}

					>
						{isInstalled ? 'You Are Already Installed' : `Install Now (${size} MB)`}
					</button>
				</div>
			</div>
			<div className='border-t-2 border-gray-100 mt-4'></div>
			<div>
				<h3 className='font-bold mt-10'>Ratings</h3>
				<ComposedChart
					layout="vertical"
					style={{ width: '100%', maxWidth: '1200px', maxHeight: '70vh', aspectRatio: 1 / 1.618 }}
					responsive
					data={ratings}
					margin={{
						top: 20,
						right: 0,
						bottom: 0,
						left: 0,
					}}
				>

					<CartesianGrid stroke="#f5f5f5" />
					<XAxis type="number" niceTicks="snap125" />
					<YAxis dataKey="name" type="category" scale="band" width="auto" />
					<Tooltip />
					<Legend />
					<Bar dataKey="count" barSize={20} fill="#FF8811" />


				</ComposedChart>
			</div>
			<div className='border-t-2 border-gray-100 mt-4'></div>
			<div className='mt-10'>
				<h3><span className='font-bold'>Description</span> <br />{description}</h3>
			</div>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default AppDetails;