import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import App from '../Pages/App/App';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		
		children: [
			{
				index: true,
				loader:()=>fetch('/appData.json'),
				path: "/",
				Component: Home
			},
			{
				path: "/app",
				loader:() =>fetch('/appData.json'),
				Component: App
			},
			{
				path: "/installation",
				loader:() =>fetch('/appData.json'),
				Component: Installation
			},
			{
				path: "/appDetails/:id",
				loader:() =>fetch('/appData.json'),
				// Component: AppDetails
				element: <AppDetails></AppDetails>
			}
		],
		errorElement: <ErrorPage></ErrorPage>
	},
]);