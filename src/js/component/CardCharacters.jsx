import React from "react";
import starWarsPoster from "../../img/starwars-poster.jpg";
import { Link } from "react-router-dom";


export const CardCharacters = (props) => {
    
    return (
        <div className="card col-sm-4 m-2 bg-secondary p-0" style={{ width: "18rem" }}>
            <img src={starWarsPoster} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <Link to={"/people/" + props.id}>
                    <button type="button" className="btn btn-primary ms-4">Learn More</button>
                </Link>
                <button type="button" className="btn btn-outline-warning ms-4"><i className="far fa-heart"></i></button>
            </div>
        </div>
    )
};