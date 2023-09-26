import React from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/logo-starwars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3 p-0">
			<Link to="/">
				<img src={starWars} className="img-fluid rounded-start p-3 ms-5" style={{ width: "130px", height: "80px" }} />
			</Link>
			<div className="dropdown p-3 me-5">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul class="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
		</nav>
	);
};
