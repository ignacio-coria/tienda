import React, {useState, createContext} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    const addProductos = (productos, quantity) => {
        if (isInCart(productos.id)) {
            let pos = cart.findIndex(x => x.id === productos.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...productos, quantity:quantity}]);
        }
    }

    const removeProductos = (id) => {
        const productos = cart.filter(x => x.id !== id);
        setCart([...productos]);
    }

    const clear = () => {
        setCart([]);
    }

    const cartTotal = () => {
        return cart.reduce((total, productos) => total += productos.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((total, productos) => total += productos.quantity * productos.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addProductos, removeProductos, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;