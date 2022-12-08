import React from "react";
import {useState} from "react"

const ItemContador = ({ stock}) => {
const [count, setcount]= useState(1)

const increanseStock =() => {
    if (count < stock){
        setcount(count + 1)
    }
}
const decreaseStock =() =>{
    if (count > 1){
    setcount(count - 1)
    }
}

const onAdd = () =>{
    console.log("agregaste  "+ count + " Productos al Carrito")
}
return(
    <div className="row mb-3 text-center">
    < div > 
        <button type= "button" className= "btn btn-light" onClick ={increanseStock}>+</button>
        <button type= "button" className= "btn btn-light" >{count}</button>
        <button type= "button" className= "btn btn-light" onClick ={decreaseStock}>-</button>
    </div>
    <div>
        <button type= "button" className= "btn btn-light" onClick={onAdd} >Agregar al Carrito</button>
    </div>
    </div>
)
} 
export default ItemContador;