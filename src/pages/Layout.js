import Logo from "../logo_transparent.webp";
//import Logo from "../logo320x100.jpg";
import { Outlet, Link } from "react-router-dom";
import DatosContacto from "./DatosContacto";

import React from "react";

export default function Layout() {
  return (
    <>
      <header>
        <div className="cabeceraSuperior">
          <DatosContacto></DatosContacto>
        </div>
        <nav className="HolyGrail-nav">
          <div className="Logotipo">
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <ul className="Navegador-home">
            <li key="/">
              <Link to={"/"}>Home</Link>
            </li>
            <li key="../CasasEco">
              <Link to={"../CasasEco"}>
                Casas <br></br>sostenibles
              </Link>
            </li>
            <li key="../Reformas">
              <Link to={"../Reformas"}>Reformas</Link>
            </li>
            <li key="../Proyectos">
              <Link to={"../Proyectos"}>Proyectos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="HolyGrail-body">
        <main className="HolyGrail-content">
          <Outlet></Outlet>
        </main>
      </div>
      <footer className="cabeceraSuperior">
        <DatosContacto></DatosContacto>
      </footer>
    </>
  );
}
