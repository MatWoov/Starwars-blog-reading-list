import React, { useContext } from "react";
import starWarsPoster from "../../img/starwars-poster.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardCharacters = (props) => {
    const { store, actions } = useContext(Context)
    const imageUrl = "https://starwars-visualguide.com/assets/img/characters/";


    return (
        <div className="card m-2 bg-white p-0  border border-0" style={{ width: "15rem" }}>
            <img src={`${imageUrl}${props.id}.jpg`} className="card-img-top" alt="image characters" />
            <div className="card-body">
                <h5 className="card-title text-start ms-1 mb-3">{props.name}</h5>
                <Link to={"/character/" + props.id}>
                    <button type="button" className="btn btn-dark ms-0 border border-warning">Learn More</button>
                </Link>
                <button type="button" className="ms-5 btn btn-outline-warning"
                    onClick={() => actions.setFavorites({ type: 'Character', name: props.name })}>
                    <i className="far fa-heart"></i>
                </button>
            </div>
        </div>
    )
};