import React, { useEffect, useState  } from "react"
import { customFetch } from "../json/customFetch"
import ItemList from "./ItemList"
import { productos } from "../productos"

const ItemListContainer = ({greeting} ) =>{

const [listProducts, setlistProducts] = useState([]) 

useEffect(()=>{
        customFetch(productos)
            .then(res => {setlistProducts(res)})
    }, [])

    return(
        <div>
            <ItemList listProducts={listProducts} />
        </div>

    )
}

export default ItemListContainer;