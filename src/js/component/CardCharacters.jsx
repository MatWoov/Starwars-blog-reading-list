import React from "react";
import starWars from "../../img/logo-starwars.png";


export const CardCharacters = () => {


    return (
        <div className="container">
            <h1 className="mb-5">Characters</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                <div className="card col-sm-4" style={{ width: "18rem" }}>
                    <img src={starWars} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title mb-4">Luke Skywalker</h5>
                        <div className="text-start">
                            <p className="mb-0">Gender:</p>
                            <p className="mb-0">Hair color:</p>
                            <p className="mb-5">Eye-color: </p>
                        </div>
                        <button type="button" class="btn btn-primary">Learn More</button>
                        <button type="button" class="btn btn-outline-warning ms-4"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
};