import React from "react"; 
import ItemDetalle from "./ItemDetalle";
import { productos } from "../productos";


const ItemDetalleContainer = () => {
    const [listProducts, setlistProducts] = useState([]) 

    useEffect(()=>{
            customFetch(productos)
                .then(res => {setlistProducts(res)})
        }, [])




    return(

    <div>
<ItemDetalle listProducts={listProducts}/>
</div>
)
}
export default ItemDetalleContainer;