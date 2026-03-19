import React from 'react';
import ri from '../../assets/icon-ratings.png'
import di from '../../assets/icon-downloads.png'
const ShowInstallApp = ({ singleapp, onUninstall }) => {

	const {id, image, title, description, ratingAvg, downloads, size } = singleapp
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center mb-8'>
				<img className='w-[80px] h-[80px] mx-8 ' src={image} alt="" />
				<div className=''>
					<h3>{title}: <span>{description}</span></h3>
					<div className='flex items-center'>
						<div className='flex items-center mx-2'><img className='w-4 h-4 m-2' src={di} alt="" /><span className='bg-gradient-to-br from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent'>{downloads}</span></div>
						<div className='flex items-center mx-2'><img className='w-4 h-4 m-2' src={ri} alt="" /><span className='text-orange-400'>{ratingAvg}</span></div>

						<p>{size}MB</p>
					</div>
				</div>
			</div>
			<div>
				<button 
				onClick={() => onUninstall(id)} 
				style={{backgroundImage: `linear-gradient(to bottom right, #22C55E, #16A34A, #047857)`}}
				className='btn'>UnInstall</button>
			</div>
		</div>
	);
};

export default ShowInstallApp;