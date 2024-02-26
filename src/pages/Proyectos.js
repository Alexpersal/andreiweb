import "./Proyectos.css";
import { useEffect } from "react";
import Carousel from "./Carrusel";

import imagen1 from "../Imagenes/Proyectos/Cervera/cervera01.webp";
import imagen2 from "../Imagenes/Proyectos/Cervera/cervera02.webp";
import imagen3 from "../Imagenes/Proyectos/Cervera/cervera03.webp";
import imagen4 from "../Imagenes/Proyectos/Cervera/cervera04.webp";
import imagen5 from "../Imagenes/Proyectos/Cervera/interior06.webp";
import imagen6 from "../Imagenes/Proyectos/Cardedeu/cardedeu01.webp";
import imagen7 from "../Imagenes/Proyectos/Cardedeu/cardedeu02.webp";
import imagen8 from "../Imagenes/Proyectos/Cardedeu/cardedeu03.webp";
import imagen9 from "../Imagenes/Proyectos/Cardedeu/cardedeu04.webp";
import imagen10 from "../Imagenes/Proyectos/Cardedeu/cardedeu05.webp";
import imagen11 from "../Imagenes/Proyectos/Cardedeu/cardedeu06.webp";
import imagen12 from "../Imagenes/Proyectos/Castellet/castellet01.webp";
import imagen13 from "../Imagenes/Proyectos/Castellet/castellet02.webp";
import imagen14 from "../Imagenes/Proyectos/Castellet/castellet03.webp";
import imagen15 from "../Imagenes/Proyectos/Llica/llica01.webp";
import imagen16 from "../Imagenes/Proyectos/Llica/llica02.webp";
import imagen17 from "../Imagenes/Proyectos/Ramis/juliaRamis01.webp";
import imagen18 from "../Imagenes/Proyectos/Ramis/juliaRamis02.webp";
import imagen19 from "../Imagenes/Proyectos/Tarrega/tarrega01.webp";
import imagen20 from "../Imagenes/Proyectos/Tarrega/tarrega02.webp";
import imagen21 from "../Imagenes/Proyectos/Tarrega/tarrega03.webp";
import imagen22 from "../Imagenes/Proyectos/Tarrega/tarrega04.webp";
import video from "../Video/videoCasas.mp4";

export default function Proyectos() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const carouselImages1 = [imagen1, imagen2, imagen3, imagen4, imagen5];
  const carouselImages2 = [
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    imagen11,
  ];
  const carouselImages3 = [imagen12, imagen13, imagen14];
  const carouselImages4 = [imagen15, imagen16];
  const carouselImages5 = [imagen17, imagen18];
  const carouselImages6 = [imagen19, imagen20, imagen21, imagen22];
  return (
    <>
      <div className="imgSuperior">
        <h1>
          Proyectos realizados
          <br />
          de vivienda industrializada
          <br />
          en Barcelona
        </h1>
      </div>
      <div className="projectsSpace">
        <div className="texto-Home">
          <h2>
            Te sorprenderás de la variedad y la belleza de estas viviendas, que
            combinan el diseño y la funcionalidad con el respeto por el entorno.
          </h2>{" "}
          <div className="projectVideoPresentacion">
            <video
              className="videoPresentacion"
              type="video/mp4"
              width="700"
              height="393"
              src={video}
              title="Video promocion"
              controls
            ></video>
          </div>
          <h2>
            No lo dudes más y contacta con nosotros para solicitar un
            presupuesto sin compromiso.
          </h2>
          <h2>
            Te asesoraremos y te ayudaremos a crear la vivienda de tus sueños,
            con la mejor relación calidad-precio del mercado, estamos seguros de
            que quedarás satisfecho con nuestro trabajo y con tu nueva vivienda
            unifamiliar industrializada con sistema constructivo Steel Frame.
          </h2>
          <h2>
            Aquí podrás ver algunos ejemplos de las viviendas unifamiliares
            industrializadas con sistema constructivo Steel Frame que hemos
            construido, puedes visitar nuestra galería de proyectos, donde
            encontrarás imágenes y descripciones de cada uno de ellos.
          </h2>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Cervera</h3>
          <div>
            <Carousel
              images={carouselImages1}
              className="proyectoImg01"
            ></Carousel>
          </div>
          <p>
            Casa unifamiliar de dos plantas de unos 185 m2 útiles.<br></br>{" "}
            Alternando sistema constructivo steel frame con estructura laminada
            consiguiendo asi grandes luces y espacios interiores abiertos.
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Cardedeu</h3>
          <Carousel images={carouselImages2}></Carousel>
          <p>
            Vivienda unifamiliar con piscina de una sola planta de unos 145 m2
            útiles.<br></br> Bonito diseño con aplacado de madero en algunos
            volumenes de su exterior dándole calidez.
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Castellet i la Gornal</h3>
          <Carousel images={carouselImages3}></Carousel>
          <p>
            Vivienda unifamiliar aislada con piscina de unos 100 m2 útiles.
            <br></br>
            Bonito diseño en forma de "L" adaptándose a una perfetcta
            orientacion solar.
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Sant Julià de Ramis</h3>
          <Carousel images={carouselImages5}></Carousel>
          <p>
            vivienda unifamiliar aislada de unos 135 m2 útiles.<br></br>{" "}
            Actualmente en construcción trabajos contratados estructuira steel
            frame y envoltorios exteriores.
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Lliçà</h3>
          <Carousel images={carouselImages4}></Carousel>
          <p>
            vivienda unifamiliar aislada de unos 175 m2 útiles.<br></br>{" "}
            Actualmente en construcción trabajos contratados estructura steel
            frame y envoltorios exteriores.
          </p>
        </div>

        <div className="projecto1">
          <h3>Vivienda unifamiliar Tàrrega</h3>
          <Carousel images={carouselImages6}></Carousel>
          <p>
            Vivienda unifamiliar aislada de unos 145 m2.<br></br> Vienda
            realizada con todas las mejoras constructivas ( placas
            fotovoltaicas, forjaqdo sanitario aerotermia, suelo radiante ... )
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Igualada</h3>
          <div className="proyectoImg04"></div>
          <p>Vivienda unifamiliar aislada de unos 155 m2 útiles.</p>
        </div>
      </div>
    </>
  );
}
