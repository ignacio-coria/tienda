import React from "react";
import Header from "./Components/Header";
import ItemContador from "./Components/ItemContador";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"Bienvenido a Hielo y Fuego Comics"} />
      <ItemContador initial= {1} stock = {10} />
    </div>
  );
}

export default App
