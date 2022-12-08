import React from "react"; 
import { productos } from "../productos";
import ItemContador from "./ItemContador";

const ItemDetalle = ({item}) => {
return(
<div className="row">
    <div className="col-md-4 offset-md-2" >
        <img src={productos.img} alt={productos.nombre} />
    </div>
    <div>
        <h1>{productos.nombre}</h1>
        <p>{productos.descripcion}</p>
        <p><b>${productos.precio}</b></p>
        <ItemContador stock={productos.stock} />
    </div>
</div>
)
}
export default ItemDetalle;