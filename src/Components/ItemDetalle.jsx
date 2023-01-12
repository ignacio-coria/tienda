import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemContador from "./ItemContador";

const ItemDetalle = ({productos}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(productos.stock);
    }, [item]);

return(
<div className="row">
    <div className="col-md-4 offset-md-2" >
        <img src={productos.img} alt={productos.nombre} />
    </div>
    <div>
        <h1>{productos.nombre}</h1>
        <p>{productos.descripcion}</p>
        <p><b>${productos.precio}</b></p>
        <ItemContador stock={productos.stock}  onAdd={onAdd} />
    </div>
</div>
)
}
export default ItemDetalle;