import React from 'react';
import errorpage from '../../assets/error-404.png'
import NavBar from '../../Components/Header/NavBar';
import { useNavigate } from 'react-router';

const ErrorPage = () => {

	const navigate = useNavigate();
	return (
		<div className='max-w-6xl mx-auto'>
			<NavBar></NavBar>
			<img className='mt-20 mx-auto lg:mx-78' src={errorpage} alt="error" />

			<div className='text-center mt-20'>
				<h3 className='text-4xl font-bold mb-4'>Oops, page not found!</h3>
				<p>The page you are looking for is not available.</p>
				<button
					style={{backgroundImage: `linear-gradient(to bottom right, #6D28D9, #7C3AED, #9333EA)`}}
					onClick={() => navigate('/')}
					className='btn btn-primary mt-6'
				>
					Go Back Home
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;