import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CasasEco from "./pages/CasasEco";
import Reformas from "./pages/Reformas";
import Proyectos from "./pages/Proyectos";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="CasasEco" element={<CasasEco />} />
            <Route path="Reformas" element={<Reformas />} />
            <Route path="Proyectos" element={<Proyectos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
