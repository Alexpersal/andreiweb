import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../Imagenes/Home/carrusel 1.webp";
import img2 from "../Imagenes/Home/carrusel 2.webp";
import img3 from "../Imagenes/Home/carusel 4.webp";
import imgDisenoInteriores from "../Imagenes/Proyectos/Cervera/cervera04.webp";
import casaSteelFrame from "../Imagenes/Home/casaSteelFrame.webp";

function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const imagenes = [img3, img2, img1, img2];
  const frases = [
    "Construcción sostenible",
    "Viviendas a medida",
    "Tu proyecto, nuestra pasión",
    "Reformas integrales viviendas",
  ];

  const [posicion, setPosicion] = useState(0);

  useEffect(() => {
    const lastIndex = imagenes.length - 1;
    if (posicion < 0) {
      setPosicion(lastIndex);
    }
    if (posicion > lastIndex) {
      setPosicion(0);
    }
  }, [posicion, imagenes]);
  useEffect(() => {
    let slider = setInterval(() => {
      setPosicion(posicion + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [posicion]);

  return (
    <div className="contenedor-general-carrousel">
      <div className="contenedor-carrousel">
        <div className="contenedor-imagenes">
          <img
            className="imagen-principal"
            alt="imagenes"
            src={imagenes[posicion]}
          ></img>
          <div className="texto-imagen">
            <h1>{frases[posicion]}</h1>
          </div>
        </div>
      </div>
      <div className="texto-Home">
        <h2>
          En BENTSA nos dedicamos a la{" "}
          <strong>construcción industrializada y sostenible</strong>
          desde hace más de 15 años por toda la zona de Cataluña. Nuestra
          especialidad es el sistema <strong>Steel Frame</strong>, que nos
          permite crear viviendas unifamiliares y plurifamiliares de alta
          calidad y de bajo impacto ambiental.<br></br> Contamos con un equipo
          propio de operarios expertos en cada fase de la obra, y con un equipo
          de técnicos colaboradores que nos apoyan en el estudio y el diseño de
          los proyectos. <br></br>Hacemos <strong>reformas</strong>reformas y{" "}
          <strong>rehabilitaciones</strong>rehabilitaciones de todo tipo,
          trabajando con promotores y administradores de fincas de confianza,
          por toda la província de<strong> Barcelona</strong>. <br></br>
          <br></br>¿Tienes un proyecto en mente? <br></br>
          <br></br>Pues no lo dejes pasar y contacta con nosotros. <br></br>
          Estamos deseando escucharte y ayudarte a hacerlo realidad.
        </h2>
      </div>
      <div className="contenedor-proyectos">
        <div className="contenedor-proyectos-reformas-descripcion">
          <Link
            to={"./Reformas"}
            className="contenedor-reformas"
            alt="reformas2"
          >
            <img
              className="reformas-home"
              alt="reformas"
              src={imgDisenoInteriores}
            ></img>
          </Link>
          <div className="contenedor-proyectos-reformas-textos">
            <h2>REFORMAS INTEGRALES </h2>

            <p>
              En BENTSA nos preocupamos por el medio ambiente y por tu bienestar
              sin dejar de un lado la calidad y los resultados deseados. Por
              eso, te ofrecemos las mejores soluciones para reformar tu casa o
              tu negocio, aprovechando al máximo los recursos, cuidando el
              ecosistema y garantizando la exceléncia. Deja en nuestras manos tu
              nuevo proyecto, te acompañaremos en todo el proceso, desde el
              diseño hasta la ejecución, para que tu espacio se adapte a tus
              gustos y necesidades. Así, conseguirás un espacio que respete el
              planeta, que te haga sentir bien y que ahorre energía. ¿A qué
              esperas? ¡Contacta con nosotros y te daremos un presupuesto sin
              compromiso!”
            </p>
          </div>
        </div>
        <div className="contenedor-proyectos-casas-descripcion">
          <div className="contenedor-proyectos-casas-textos">
            <h2>VIVIENDAS INDUSTRIALIZADAS</h2>
            <p>
              En BENTSA sabemos que hacer realidad tu proyecto, alcanzar tu
              sueño y se ajuste a tus necesidades, no es fácil. Por eso, te
              ofrecemos nuestro apoyo, nuestra profesionalidad y nuestra
              experiencia en cada paso del proceso. Nos gusta adaptarnos a ti, a
              tu caso y a tus estilo de vida. Queremos que vivas una experiencia
              positiva y que disfrutes del resultado final. Por eso, buscamos
              siempre las mejores tecnologías, soluciones y sistemas
              constructivos, que respeten el medio ambiente, que sean
              sostenibles y que se ajusten a tu presupuesto. Tus proyectos son
              nuestra pasión, y estamos deseando hacerlos realidad. Contacta con
              nosotros y te sorprenderemos.
            </p>
          </div>
          <Link
            className="contenedor-steelframe"
            alt="reformas"
            to={"./CasasEco"}
          >
            <img
              className="steelframe-home"
              alt="steelframe"
              src={casaSteelFrame}
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
