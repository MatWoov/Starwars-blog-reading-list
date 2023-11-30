import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
// import { CardCharacters } from "../component/CardCharacters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Starship } from "../component/Starships.jsx";
import { Personajes } from "../component/Personajes.jsx";

export const HomePage = () => (
	<div className="body text-center mt-5">
		<Personajes />
		<Planets />
		<Starship />
	</div>
);
