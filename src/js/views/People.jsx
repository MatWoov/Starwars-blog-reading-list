import React, { useContext } from "react";
import { CardCharacters } from "../component/CardCharacters.jsx";
import { Context } from "../store/appContext.js";
import { useActionData } from "react-router";

export const People = () => {
    const { store, actions } = useContext(Context);
    console.log(store.users)


    return (
        <div>
            <ul> 
               {store.users.map((user) => <li>{user.name}</li>)}
            </ul>
            <CardCharacters />
        </div>
    )
}