import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const imageUrl = "https://starwars-visualguide.com/assets/img/planets/";
    const params = useParams();
    actions.detailPlanets(params.idContact);


    return (
        <div className="container bg-secondary rounded">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="row py-5">
                    <div className="col-4">
                        <img src={`${imageUrl}${params.idContact}.jpg`} className="img-fluid rounded" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="col-8 p-4">
                        <h1 className="fw-semibold">{store.selectPlanetProperties.name}</h1>
                        <p className="text-uppercase">{store.selectPlanet.description}</p>
                    </div>
                </div>
            </div>
            <div className="container text-center border-top border-dark p-3 mb-3">
                <div className="row mt-4">
                    <div className="col-2">
                        <p className="fw-bolder">Name</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectPlanetProperties.name}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Climate</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectPlanetProperties.climate}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Population</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectPlanetProperties.population}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Orbital Period</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectPlanetProperties.orbital_period}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Rotation Period</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectPlanetProperties.rotation_period}</p>
                    </div>
                    <div className="col-2">
                        <p className="fw-bolder">Diameter</p>
                        <p className="list-unstyled mb-0 text-uppercase">{store.selectPlanetProperties.diameter}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}