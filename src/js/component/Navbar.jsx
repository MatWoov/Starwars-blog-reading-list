import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/logo-starwars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);


	return (
		<nav className="navbar navbar-light bg-black mb-3 p-0">
			<div className="container-fluid d-flex justify-content-between">
				<Link to="/">
					<img src={starWars} className="img-fluid rounded-start p-3 ms-5" style={{ width: "130px", height: "80px" }} />
				</Link>
				<div className="dropdown me-5">
					<Link to={"/characters"} className="text-warning me-3 text-decoration-none">Characters</Link>
					<Link to={"/planets"} className="text-warning me-3 text-decoration-none">Planets</Link>
					<Link to={"/starships"} className="text-warning me-3 text-decoration-none">Starships</Link>
					<button className="btn btn-dark border border-warning dropdown-toggle position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
						{(store.favorites.length === 0) ?
							(<li className="m-2 text-secondary">Empty</li>) :
							store.favorites.map((item, id) => (
								<li key={id} className="d-flex p-1">
									<span className="dropdown-item">{item.type} - {item.name}</span>
									<button className="btn btn-danger" onClick={() => actions.setFavorites({ type: item.type, name: item.name })}>
										<i className="fa fa-trash"></i>
									</button>
								</li>
							))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
