import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import FullApp from '../FullApp/FullApp';
import SearchData from '../SearchData/SearchData';
import AR from '../../assets/App-Error.png'
import { CiSearch } from "react-icons/ci";

const App = () => {
	const data = useLoaderData();
	// console.log(data);

	const [search, setSearch] = useState('');

	const filterdata = data.filter(app => app.title?.toLowerCase().includes(search.toLowerCase()));

	return (
		<div>
			<div className='text-center'>
				<h3 className='text-3xl font-bold mt-20 mb-4'>Our All Applications</h3>
				<p>Explore All Apps on the Market developed by us. We code for Millions</p>
			</div>

			<div className='flex items-center justify-between mt-10'>
				<h3 className='font-bold'>({search ? filterdata.length : data.length}) Apps Found</h3>
				<div className='relative'>
					<CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
					<input
						className="border pl-10 pr-3 py-2 rounded"
						type="search"
						placeholder='Search'
						value={search}
						onChange={(e) => setSearch(e.target.value)}

					/>
				</div>
			</div>
			{search && filterdata.length === 0 ? (
				<div className='flex flex-col items-center justify-center mt-16'>
					<img
						src={AR}
						alt='App not found'
						className='w-64 mb-4'
					/>
					<p className='text-lg font-semibold text-gray-500'>
						No apps found
					</p>
					<button
						onClick={() => setSearch('')}
						className='btn mt-4 text-white'
						style={{backgroundImage: `linear-gradient(to bottom right, #6D28D9, #7C3AED, #9333EA)`}}
					>
						Clear Search
					</button>
				</div>
			) : (
				<FullApp data={search ? filterdata : data} />
			)}
		</div>

	);
};

export default App;