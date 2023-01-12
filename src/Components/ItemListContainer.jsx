import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import db from "../firebase";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        
        getDocs(q).then((productos) => {
            setProductos(productos.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
        });
    }, [id]);
    
    return (
        <div className="container">
            {<ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer;