import React from "react";

const ItemList =({ListProducts}) => {

return(
    <div>
        {ListProducts.map(productos => <item key={productos.id} productos={productos}  /> )}
    </div>
)
}
export  default  ItemList;