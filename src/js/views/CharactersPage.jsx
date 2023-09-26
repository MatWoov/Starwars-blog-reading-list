import React from "react";
import starWarsPoster from "../../img/starwars-poster.jpg";



export const CharactersPage = () => {

    return (
        <div className="container">
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="row py-5">
                    <div class="col-4">
                        <img src={starWarsPoster} class="img-fluid rounded-start" style={{ maxWidth: "100%" }} />
                    </div>
                    <div class="col-8 p-4">
                        <h1 class="fw-semibold">Custom jumbotron</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vero nulla fugit reprehenderit nobis quae facilis impedit. Similique aliquam, assumenda impedit magni ipsa consequuntur tempora laudantium, quam nulla amet dolorem?</p>
                    </div>
                </div>
            </div>
            <div class="container text-center border-top border-dark">
                <div class="row mt-4">
                    <div class="col-2">
                        <p class="fw-bolder">Links</p>
                        <p className="list-unstyled mb-0">hola</p>
                    </div>
                    <div class="col-2">
                        <p class="fw-bolder">Links</p>
                        <p className="list-unstyled mb-0">hola</p>
                    </div>
                    <div class="col-2">
                        <p class="fw-bolder">Links</p>
                        <p className="list-unstyled mb-0">hola</p>
                    </div>
                    <div class="col-2">
                        <p class="fw-bolder">Links</p>
                        <p className="list-unstyled mb-0">hola</p>
                    </div>
                    <div class="col-2">
                        <p class="fw-bolder">Links</p>
                        <p className="list-unstyled mb-0">hola</p>
                    </div>
                    <div class="col-2">
                        <p class="fw-bolder">Links</p>
                        <p className="list-unstyled mb-0">hola</p>
                    </div>
                </div>
            </div>
        </div>
    )
}