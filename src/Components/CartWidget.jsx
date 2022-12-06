import React from "react";

const CartWidget = () =>{
    return(
        <div>
            <button type="button" className="btn btn-success position-relative">
                <img src="image/bag.svg" alt="carrito" width="32" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    1
                </span>
            </button>
        </div>
    )
}

export default CartWidget;