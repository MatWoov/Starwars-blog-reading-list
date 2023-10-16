import React, { useContext } from "react";
import starWarsPoster from "../../img/starwars-poster.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardCharacters = (props) => {
    const { store, actions } = useContext(Context)
    

    return (
        <div className="card col-sm-4 m-2 bg-secondary p-0" style={{ width: "18rem" }}>
            <img src={starWarsPoster} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-4">{props.name}</h5>
                <Link to={"/people/" + props.id}>
                    <button type="button" className="btn btn-dark ms-0 border border-warning">Learn More</button>
                </Link>
                <button type="button" className="ms-5 btn btn-outline-warning" 
                onClick={() => actions.setFavorites({type:'Character', name: props.name})}>
                    <i className="far fa-heart"></i> 
                </button>
            </div>
        </div>
    )
};