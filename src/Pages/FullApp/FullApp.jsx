import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const FullApp = ({ data}) => {
	// console.log(data);

	return (
		<div>
			<Suspense>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mt-10'>
					{

						data.map((singleapp) => <SingleApp key={singleapp.id} singleapp={singleapp}></SingleApp>)

					}
				</div>
			</Suspense>
		</div>
	);
};

export default FullApp;