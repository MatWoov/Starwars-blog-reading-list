import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardCharacters } from "./CardCharacters.jsx";


export const Personajes = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="container">
            <h1 className="mb-5 text-white">Characters</h1>
            <div className="row d-flex flex-row flex-nowrap position-relative overflow-auto m-3">
                {store.users.map((user) =>
                    <CardCharacters key={user.id} name={user.name} id={user.uid} />
                )}
            </div>
        </div>
    )
}
