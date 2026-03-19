import React from 'react';
import ri from '../../assets/icon-ratings.png'
import di from '../../assets/icon-downloads.png'
const ShowInstallApp = ({ singleapp, onUninstall }) => {

	const { id, image, title, description, ratingAvg, downloads, size } = singleapp
	return (
		<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10'>


			<div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-0'>

				<img
					className='w-[80px] h-[80px] mx-auto sm:mx-0'
					src={image}
					alt=""
				/>

				<div className='text-center sm:text-left'>
					<h3 className='font-semibold'>
						{title}: <span>{description}</span>
					</h3>

					<div className='flex flex-wrap justify-center sm:justify-start items-center gap-2 mt-2'>

						<div className='flex items-center'>
							<img className='w-4 h-4 mr-1' src={di} alt="" />
							<span className='bg-gradient-to-br from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent'>
								{downloads}
							</span>
						</div>

						<div className='flex items-center'>
							<img className='w-4 h-4 mr-1' src={ri} alt="" />
							<span className='text-orange-400'>{ratingAvg}</span>
						</div>

						<p className='text-sm'>{size}MB</p>
					</div>
				</div>
			</div>


			<div className='text-center sm:text-right'>
				<button
					onClick={() => onUninstall(id)}
					style={{ backgroundImage: `linear-gradient(to bottom right, #22C55E, #16A34A, #047857)` }}
					className='btn w-full sm:w-auto'
				>
					Uninstall
				</button>
			</div>

		</div>
	);
};

export default ShowInstallApp;