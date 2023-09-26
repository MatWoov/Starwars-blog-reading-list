import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardCharacters } from "../component/CardCharacters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Starship } from "../component/Starships.jsx";

export const HomePage = () => (
	<div className="text-center mt-5">
		<CardCharacters />
		<Planets />
		<Starship />
	</div>
);
