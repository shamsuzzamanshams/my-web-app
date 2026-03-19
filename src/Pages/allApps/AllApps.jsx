import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const AllApps = ({ data }) => {
	return (
		<div>
			<div className='text-center'>
				<h3 className='text-3xl font-bold mt-20 mb-4'>Trending Apps</h3>
				<p>Explore All Trending Apps on the Market developed by us</p>
			</div>
			<Suspense fallback={<span>loading..........</span>}>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mt-10'>
					{
						data.slice(0,8).map((singleapp) => <SingleApp key={singleapp.id} singleapp={singleapp}></SingleApp>)
					}
				</div>
			</Suspense>
		</div>
	);
};

export default AllApps;