import React from "react";
import {useState} from "react"

const ItemContador = ({initial, stock}) => {
const [count, setcount]= useState(initial)
const increanse =() => count < stock && setcount(count + 1)
const decrease =() => count > initial && setcount(count - 1)
return(
    < div className="d-flex justify-content-end"> 
        <button type= "button" className= "btn btn-dark" onClick={increanse}>+</button>
        <div>{count}</div> 
        <button type= "button" className= "btn btn-dark" onClick={decrease}>-</button>
    </div>

)
} 
export default ItemContador;