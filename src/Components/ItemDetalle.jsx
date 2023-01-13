import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemContador from "./ItemContador";

const ItemDetalle = ({productos}) => {
    const {addProductos} = useContext(CartContext);
    const [productosStock, setProductosStock] = useState(0);

    const onAdd = (quantity) => {
        setProductosStock(productosStock - quantity);
        addProductos(productos, quantity);
    }

    useEffect(() => {
        setItemStock(productos.stock);
    }, [productos]);

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