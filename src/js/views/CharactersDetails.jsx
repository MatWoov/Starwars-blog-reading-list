import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const CharactersDetails = () => {
    const { store, actions } = useContext(Context);
    const imageUrl = "https://starwars-visualguide.com/assets/img/characters/";
    const params = useParams();
    actions.infoCharacters(params.idContact);

        return (
            <div className="container bg-white rounded">
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="row py-5">
                        <div className="col-4">
                            <img src={`${imageUrl}${params.idContact}.jpg`} className="img-fluid rounded" style={{ maxWidth: "50%" }} />
                        </div>
                        <div className="col-8 p-4">
                            <h1 className="fw-semibold">{store.selectCharacterProperties.name}</h1>
                            <p className="text-uppercase">{store.selectCharacter.description}</p>
                        </div>
                    </div>
                </div>
                <div className="container text-center border-top border-dark p-3 mb-3">
                    <div className="row mt-4">
                        <div className="col-2">
                            <p className="fw-bolder">Name</p>
                            <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.name}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Birth Year</p>
                            <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.birth_year}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Gender</p>
                            <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.gender}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Height</p>
                            <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.height}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Skin Color</p>
                            <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.skin_color}</p>
                        </div>
                        <div className="col-2">
                            <p className="fw-bolder">Eye Color</p>
                            <p className="list-unstyled mb-0 text-uppercase">{store.selectCharacterProperties.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

