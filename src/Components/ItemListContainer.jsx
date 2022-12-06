import React, { useEffect, useState  } from "react"
import { customFetch } from "../json/customFetch"
import ItemList from "./ItemList"
const ItemListContainer = ({greeting} ) =>{

const [listProducts, setListProducts] = useState([]) 

useEffect(()=>{
        customFetch(productos.json)
            .then(res => {setListProducts(res)})
    }, [])

    return(
        <div>
            <ItemList listProducts={listProducts} />
        </div>

    )
}

export default ItemListContainer;