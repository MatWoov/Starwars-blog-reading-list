import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const ViewStarships = () => {
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
        <div className="container text-center">
            <h1 className="text-warning mb-5">Starships</h1>
            <div className="row row-cols-2 row-cols-lg-5 g-lg-3 text-center d-flex justify-content-center">
                {store.starships.map((starship) =>
                    <div className="card col-sm-4 m-2 bg-white p-0  border border-0" style={{ width: "15rem" }}>
                        <img src={getStarshipImage(starship.uid)} className="card-img-top" alt="image starships" 
                        style={{ objectFit: 'cover', width: '100%', height: '200px'}}/>
                        <div className="card-body">
                            <h5 className="card-title text-start ms-1" style={{ height: '45px'}}>{starship.name}</h5>
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