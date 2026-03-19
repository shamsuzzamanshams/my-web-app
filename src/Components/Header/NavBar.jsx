import React from 'react';
import { NavLink, Link } from 'react-router';
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa6";

const NavBar = () => {

	const linkClass = ({ isActive }) =>
		`m-2 font-semibold ${isActive
			? 'text-purple-600'
			: 'bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 bg-clip-text'
		}`;

	//

	const links = <>
		<NavLink to="/" className={linkClass}>
			<li>Home</li>
		</NavLink>

		<NavLink to="/app" className={linkClass}>
			<li>App</li>
		</NavLink>

		<NavLink to="/installation" className={linkClass}>
			<li>Installation</li>
		</NavLink>
	</>

	return (
		<div className="navbar bg-base-100 shadow-sm px-4">


			<div className="navbar-start">


				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>

					<ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
						{links}
					</ul>
				</div>


				<Link to="/" className="flex items-center gap-2">
					<img className='w-8' src={logo} alt="logo" />
					<span className="text-lg sm:text-xl font-bold bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent">
						My Web Application
					</span>
				</Link>
			</div>


			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links}
				</ul>
			</div>


			<div className="navbar-end">
				<a
					href="https://github.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-1.5 btn text-white px-3 sm:px-4"
					style={{ backgroundImage: `linear-gradient(to bottom right, #6D28D9, #7C3AED, #9333EA)` }}
				>
					<FaGithub />


					<span className="hidden sm:inline">Contribution</span>
				</a>
			</div>

		</div>
	);
};

export default NavBar;