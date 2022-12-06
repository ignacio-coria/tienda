import React from "react";
import { productos } from "../productos";
import Item from "./Item";
const ItemList =({listProducts}) => {

return(
    <div className="d-flex flex-wrap  rounded ">
        {listProducts.map(productos => <Item key={productos.id} productos={productos}  /> )}
    </div>
)
}
export  default  ItemList;