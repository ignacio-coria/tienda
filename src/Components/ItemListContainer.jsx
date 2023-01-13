import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import db from "../firebase";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const itemsCollection = collection(db, "productos");
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        
        getDocs(q).then((productos) => {
            setProductos(productos.docs.map((doc) => ({...doc.data(),id:doc.id})
            ));
        });
    }, [id]);
    
    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-12  d-flex align-items-center justify-content-end">
                    {<ItemList productos={productos} />}
                </div> 
            </div>
        </div>
        )
}

export default ItemListContainer;