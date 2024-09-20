import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/login.jsx";
import Register from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";
import Home from "./Pages/home.jsx";
import RegisterNotivication from "./Pages/registerNotivication.jsx";
import LupaPassword from "./Pages/lupapassword.jsx";
import Landing from "./Pages/landing.jsx";

const router = createBrowserRouter([
	{
		path: "",
		element: <Landing />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/registerNotivication",
		element: <RegisterNotivication />,
	},
	{
		path: "/lupapassword",
		element: <LupaPassword />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
