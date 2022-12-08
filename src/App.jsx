import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from "./Components/Error404";
import Header from "./Components/Header";
import ItemContador from "./Components/ItemContador";
import ItemDetalleContainer from "./Components/ItemDetalleContainer";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path={"/"} element={<ItemListContainer />}/>
      <Route path={"/category/:id"} element={<ItemListContainer />}/>
      <Route path={"/item/:id"} element={<ItemDetalleContainer />}/>
      <Route path={"*"} element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
