import React, {useState, createContext} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    const addProductos = (productos, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id);
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
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addProductos, removeProductos, clear, cartTotal, sumTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;