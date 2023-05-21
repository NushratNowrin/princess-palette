import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./components/Provider/AuthProviders";
import router from "./components/Routes/Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProviders>
			<RouterProvider router={router}></RouterProvider>
		</AuthProviders>
	</React.StrictMode>
);