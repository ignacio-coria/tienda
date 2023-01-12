import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        
        getDocs(q).then((comics) => {
            setItems(comics.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
        });
    }, [id]);
    
    return (
        <div className="container">
            {<ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;