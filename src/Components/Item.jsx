import React from "react";
import { Link } from "react-router-dom";


const Item = ({productos}) =>{

    return(
        
        <div className=" card border border-5 rounded border-dark  " style={{width: "15rem"}}>
            <Link to={"/item/" + productos.id}>
                <img src= {productos.img} className="card-img-top" alt={productos.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{productos.nombre}</h5>
                    <p> <b>${productos.precio} </b></p>
                    <button type= "button" className= "btn btn-dark"> Ver Detalles</button>
                </div>
            </Link>
        </div>
        )
    }

export default Item;
