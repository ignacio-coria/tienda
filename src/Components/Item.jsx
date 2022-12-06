import React from "react";
import ItemContador from "./ItemContador";
const Item = ({productos}) =>{


    return(
    <div className="card border border-5 rounded" style={{width: "18rem"}}>
        <img src= {productos.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{productos.nombre}</h5>
            <p> ${productos.precio} </p>
            <button type= "button" className= "btn btn-dark"> ver detalles</button>
            <ItemContador />
        </div>
    </div>
    )
}

export default Item;
