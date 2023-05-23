import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error/Error";
import Update from "../Single/Update/Update";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/all-toys",
				element: <AllToys></AllToys>,
				loader: () => fetch('http://localhost:5000/toys')
			},
			{
				path: "/my-toys",
				element: <MyToys></MyToys>,
				loader: () => fetch('http://localhost:5000/toys')
			},
			{
				path: "/update/:id",
				element: <Update></Update>,
				loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)

			},
			{
				path: "/add-a-toy",
				element: <AddAToy></AddAToy>
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			
			
		],
	},
	{
		path: "*",
		element: <Error></Error>,
	},
]);

export default router;
