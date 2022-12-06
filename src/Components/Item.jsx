import React from "react";

const Item = ({producto}) =>{

console.log(producto)

    return(
    <div class="card" style="width: 18rem;">
        <img src= {producto.img} class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{producto.nombre}</h5>
            <p> ${producto.precio} </p>
            <button type= "button" className= "btn btn-dark"> ver detalles</button>
        </div>
    </div>
    )
}

export default Item;





export {item};