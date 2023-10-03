import React, { useContext } from "react";
import starWarsPoster from "../../img/starwars-poster.jpg";
import { Context } from "../store/appContext";
import { useParams } from "react-router";



export const CharactersPage = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    actions.infoCharacters(params.idContact);
    if (store.selectCharacter == {}) {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="row py-5">
                        <div className="col-4">
                            <img src={starWarsPoster} className="img-fluid rounded-start" style={{ maxWidth: "100%" }} />
                        </div>
                        <div className="col-8 p-4">
                            <h1 className="fw-semibold">{store.selectCharacterProperties.name}</h1>
                            <p>{store.selectCharacter.description}</p>
                        </div>
                    </div>
                </div>
                <div className="container text-center border-top border-dark">
                    <div className="row mt-4">
                        <div className="col-2">
                            <p className="fw-bolder">Name</p>
                            <p className="list-unstyled mb-0">{store.selectCharacterProperties.name}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Birth Year</p>
                            <p className="list-unstyled mb-0">{store.selectCharacterProperties.birth_year}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Gender</p>
                            <p className="list-unstyled mb-0">{store.selectCharacterProperties.gender}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Height</p>
                            <p className="list-unstyled mb-0">{store.selectCharacterProperties.height}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Skin Color</p>
                            <p className="list-unstyled mb-0">{store.selectCharacterProperties.skin_color}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Eye Color</p>
                            <p className="list-unstyled mb-0">{store.selectCharacterProperties.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

