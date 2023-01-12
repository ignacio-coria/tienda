import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/cartContext";

const BotonCarrito = () =>{
    return(
        <div><Link to={"/cart"}
            className="btn btn-success position-relative">
                <img src="image/bag.svg" alt="carrito" width="32" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {total}
                </span>
            </Link>
        </div>
    )
}

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    return cartTotal() > 0 ? <BotonCarrito total={cartTotal()} />  : "";
}


export default CartWidget;