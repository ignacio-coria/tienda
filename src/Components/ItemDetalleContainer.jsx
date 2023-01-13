import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetalle from "./ItemDetalle"


const ItemDetalleContainer = () => {
        const [productos, setProductos] = useState();
        const {id} = useParams();
    
        useEffect(() => {
            const db = getFirestore();
            const productos = doc(db, "productos", id);
            getDoc(productos).then((snapShot) => {
				console.log("snapShot: ",snapShot)
				setProductos({id:snapShot.id, ...snapShot.data()});
            });
        }, [id])
        
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-end ">
                        {productos && <ItemDetalle productos={productos} />}
                        </div>
                    </div>
            </div>
        )

}
export default ItemDetalleContainer;