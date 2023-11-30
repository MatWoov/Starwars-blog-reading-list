import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Starship = () => {
    const { store, actions } = useContext(Context);

    const imageUrl = "https://starwars-visualguide.com/assets/img/starships/";

    const getStarshipImage = (uid) => {
        switch (uid) {
            case '2':
                return 'https://static.wikia.nocookie.net/starwars/images/3/38/Corvette_negvv.png/revision/latest?cb=20170410043658';
            case '3':
                return 'https://static.wikia.nocookie.net/disney/images/a/a8/ImpStarDestroyer-SWI125.jpg/revision/latest/scale-to-width-down/1030?cb=20121223231202';
            case '17':
                return 'https://static.wikia.nocookie.net/swse/images/e/eb/GR-75_Medium_Transport.jpg/revision/latest?cb=20180927164807';
            default:
                return `${imageUrl}${uid}.jpg`;
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-white">Starships</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.starships.map((starship) =>
                    <div className="card col-sm-4 m-2 bg-secondary p-0" style={{ width: "15rem" }}>
                        <img src={getStarshipImage(starship.uid)} className="card-img-top" alt="image starships" />
                        <div className="card-body">
                            <h5 className="card-title mb-4">{starship.name}</h5>
                            <Link to={"/starship/" + starship.uid}>
                                <button type="button" className="btn btn-dark ms-0 border border-warning">Learn More</button>
                            </Link>
                            <button type="button" className="ms-5 btn btn-outline-warning"
                                onClick={() => actions.setFavorites({ type: 'Starship', name: starship.name })}>
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}