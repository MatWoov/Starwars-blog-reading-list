import React from "react";
import { Link } from "react-router-dom";


export const HomeView = () => {

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 d-flex justify-content-center">
                <div className="col">
                    <div className="text-center">
                        <Link to={'/characters'} className="text-decoration-none">
                            <img src="https://i.pinimg.com/originals/4f/c4/09/4fc409fc1c13a5851ffe819152c52698.jpg"
                                className="rounded" style={{ maxWidth: '100%', height: '500px' }} alt="..." />
                            <div className="mt-3">
                                <h3 className="title"><strong>Characters</strong></h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center">
                        <Link to={'/planets'} className="text-decoration-none">
                            <img src="https://i.pinimg.com/736x/9b/9c/b4/9b9cb47d8133099d02ebb6465b1f7ae5.jpg"
                                className="rounded" style={{ maxWidth: '100%', height: '500px' }} alt="..." />
                            <div className="mt-3">
                                <h3 className="title"><strong>Planets</strong></h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="text-center">
                        <Link to={'/starships'} className="text-decoration-none">
                            <img src="https://w0.peakpx.com/wallpaper/700/837/HD-wallpaper-star-wars-ship-kfd-star-wars-thumbnail.jpg"
                                className="rounded" style={{ maxWidth: '100%', height: '500px' }} alt="..." />
                            <div className="mt-3">
                                <h3 className="title"><strong>Starships</strong></h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}