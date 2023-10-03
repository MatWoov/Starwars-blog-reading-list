import React, { useContext } from "react";
import starshipsImage from "../../img/starshipsImage.jpg";
import { Context } from "../store/appContext";


export const Starship = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container mt-5">
            <h1 className="mb-5">Starships</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
            {store.starships.map((starship) =>
                    <div className="card col-sm-4 m-2 bg-secondary p-0" style={{ width: "18rem" }}>
                        <img src={starshipsImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-4">{starship.name}</h5>
                            <button type="button" className="btn btn-primary">Learn More</button>
                            <button type="button" className="btn btn-outline-warning ms-4"><i className="far fa-heart"></i></button>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}