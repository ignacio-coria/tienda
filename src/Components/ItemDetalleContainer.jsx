import React from "react"; 
import { customFetch } from "../json/customFetch";
import ItemDetalle from "./ItemDetalle";
import { productos } from "../productos";


const ItemDetalleContainer = () => {
    const [Item, setItem] = useState([]) 

    useEffect(()=>{
            customFetch(productos.descripcion)
                .then(res => {setItem(res)})
        }, [])

        return(

    <div>
<ItemDetalle Item={Item}/>
</div>
)
}
export default ItemDetalleContainer;