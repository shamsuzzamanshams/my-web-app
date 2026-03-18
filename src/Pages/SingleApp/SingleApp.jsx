import React from 'react';
import ri from '../../assets/icon-ratings.png'
import di from '../../assets/icon-downloads.png'

const SingleApp = ({ singleapp }) => {
	// console.log(singleapp);

	const { image, title, description, ratingAvg, downloads } = singleapp

	return (
		<div className="card bg-base-100 w-full lg:w-[290px] shadow-sm">
			<figure className=''>
				<img
					className='h-[166px]'
					src={image}
					alt="Picture" />
			</figure>
			<div className="card-body">
				<div className='flex gap-x-2 mb-4'>
					<h3>{title}:</h3>
					<p>{description}</p>
				</div>
				<div className="card-actions justify-between mt-auto">
					<div className="badge badge-outline"><img className='w-4' src={di} alt="" /> {downloads}</div>
					<div className="badge badge-outline"> <img className='w-4' src={ri} alt="rating" />{ratingAvg}</div>
				</div>
			</div>
		</div>
	);
};

export default SingleApp;