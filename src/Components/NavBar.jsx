import React from "react";
import {Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}><img src="image/logo--tienda.png" className="border border-dark rounded" alt="logo" width="90" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" activeclassname="page" to={"/"}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/:categorymarvel"}>Marvel</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/:categorydc"}>DC</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeclassname="page" to={"/category/:categoryotros"}>Otros</NavLink>
                </li>
            </ul>
        </div>
        </div>
        </nav>
    </div>
    
    )
}

export default NavBar;