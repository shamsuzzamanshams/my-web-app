import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import App from '../Pages/App/App';
import Installation from '../Pages/Installation/Installation';

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				loader:()=>fetch('appData.json'),
				path: "/",
				Component: Home
			},
			{
				path: "/app",
				loader:() =>fetch('appData.json'),
				Component: App
			},
			{
				path: "/installation",
				Component: Installation
			}
		]
	},
]);