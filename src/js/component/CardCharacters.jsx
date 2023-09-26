import React, { useContext } from "react";
import starWarsPoster from "../../img/starwars-poster.jpg";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const CardCharacters = () => {
    const { store, actions } = useContext(Context);
    

    return (
        <div className="container">
            <h1 className="mb-5">Characters</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.users.map((user) =>
                    <div className="card col-sm-4 m-2 bg-secondary" style={{ width: "18rem" }}>
                        <img src={starWarsPoster} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title mb-4">{user.name}</h5>
                            <Link to={"/people"} class="btn btn-primary ms-4">Learn More</Link>
                            <button type="button" class="btn btn-outline-warning ms-4"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};