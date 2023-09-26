import React, { useContext } from "react";
import stPlanets from "../../img/stPlanets.jpg";
import { Context } from "../store/appContext";


export const Planets = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container mt-5">
            <h1 className="mb-5">Planets</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
            {store.planets.map((planet) =>
                    <div className="card col-sm-4 m-2 bg-secondary" style={{ width: "18rem" }}>
                        <img src={stPlanets} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-4">{planet.name}</h5>
                            <button type="button" class="btn btn-primary">Learn More</button>
                            <button type="button" class="btn btn-outline-warning ms-4"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}