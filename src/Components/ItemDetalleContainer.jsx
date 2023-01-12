import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import db from "../firebase";


const ItemDetalleContainer = () => {
        const [items, setItems] = useState([]);
        const {id} = useParams();
    
        useEffect(() => {
            const db = getFirestore();
            const item = doc(db, "productos", id);
            getDoc(item).then((snapShot) => {
                if (snapShot.exists()) {
                    setItems({id:snapShot.id, ...snapShot.data()});
                } else {
                    console.log("no hay stock!");
                }
            });
        }, [id]);

        return (
            <div className="container">
                {<ItemList items={items} />}
            </div>
        )

}
export default ItemDetalleContainer;