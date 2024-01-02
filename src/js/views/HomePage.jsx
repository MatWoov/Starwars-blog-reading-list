import React from "react";
import "../../styles/home.css";
import { HomeView } from "../component/HomeView.jsx";


export const HomePage = () => (
	<div className="body text-center mt-5 d-flex flex-column min-vh-100">
		<HomeView />
	</div>
);
