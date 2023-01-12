import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <div className=" row row-cols-1 row-cols-md-3 g-4 align-items-center justify-content-end ">
        {
            productos.map(productos => <Item key={productos.id} productos={productos} />)
        }
        </div>
    )
}
export  default  ItemList;