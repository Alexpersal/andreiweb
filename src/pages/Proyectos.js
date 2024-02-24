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
            unifamiliar prefabricada con sistema constructivo Steelframe.
          </h2>
          <h2>
            Aquí podrás ver algunos ejemplos de las viviendas unifamiliares
            prefabricadas con sistema constructivo Steelframe que hemos
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
            Contamos con un equipo cualificado que se encarga de ejecutar los
            proyectos de la manera más eficiente posible, tanto en tiempo como
            en forma . <br></br>
            Le acompañamos en todo el proceso, desde la conceptualización de la
            reforma hasta la entrega de llaves a su finalización. Nuestros
            técnicos le podrán realizar propuestas de interiorismo y si lo desea
            la confección de planos e imágenes realistas para que en todo
            momento sepa cómo será su futura vivienda, incluso antes de empezar
            la obra.
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Cardedeu</h3>
          <Carousel images={carouselImages2}></Carousel>
          <p>
            Tenemos gran experiencia en este tipo de trabajos cumpliendo con sus
            pliegues de condiciones en cada caso. Hemos realizado tiendas tanto
            en plantas bajas de edificios plurifamiliares como en centros
            comerciales acogiéndonos a sus condiciones y demandas. Nos adaptamos
            a cualquier tipo de necesidad del cliente, realizando trabajos
            nocturnos para no afectar el buen funcionamiento de la actividad en
            cuestión. Tenemos un técnico en plantilla que organiza y dirige todo
            el proceso y sus oficios, que junto a nuestra red de expertos
            colaboradores para los trabajos más específicos, conseguimos
            excelentes resultados y acabados.
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Castellet i la Gornal</h3>
          <Carousel images={carouselImages3}></Carousel>
          <p>
            Rehabilitamos todo tipo de fachadas, abarcando todas aquellas
            técnicas que nos avalan para desarrollar las intervenciones que
            corresponden a cada tipo de fachada, ( fachadas ventiladas,
            revestimientos, sistema SATE, aplacados de piedra artificial,
            porcelánicos, morteros a la cal o convencionales ... ). <br></br>
            En GRUP JCMA CALVO, sabemos que la calidad no es una opción, sino
            una obligación, por ello siempre cumplimos estrictamente con todas
            las medidas de Seguridad pertinentes, reflejadas en el Plan de
            Seguridad supervisado por nuestros técnicos especializados y por la
            Dirección Facultativa responsable del proyecto.
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Sant Julià de Ramis</h3>
          <Carousel images={carouselImages5}></Carousel>
          <p>
            Realizamos todo tipo de refuerzos estructurales según dictámenes de
            la Dirección Facultativa. Desde los sistemas tradicionales hasta los
            más actuales tipo Mecanoviga, Cointecs o similares, así como
            actuaciones en todo tipo de patología estructural (aluminosis,
            desintegración de vigas de madera, oxidación vigas metálicas etc. )
            Al tratarse de trabajos especialmente delicados, los realizamos
            siempre siguiendo las indicaciones de arquitectos especializados y
            respetando escrupulosamente todas las medidas de seguridad,
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Lliçà</h3>
          <Carousel images={carouselImages4}></Carousel>
          <p>
            Los trabajos en patios interiores, se ejecutan mediante diferentes
            técnicas específicas o combinadas, dependiendo de la complejidad de
            cada caso en particular, ya sea con estructuras andamio tubular,
            puente colgante o trabajos verticales. Cualquiera que sea su
            necesidad, estaremos ahí para ayudarle a solucionar complejos
            trabajos como pueden ser cambios de bajantes, montantes de agua y
            gas con certificado, reparaciones en paramentos, cosido de grietas,
            aplicación de morteros especiales de reparación, trabajos de
            pintura, sustitución de claraboyas ...
          </p>
        </div>

        <div className="projecto1">
          <h3>Vivienda unifamiliar Tàrrega</h3>
          <Carousel images={carouselImages6}></Carousel>
          <p>
            Realizamos todo tipo de refuerzos estructurales según dictámenes de
            la Dirección Facultativa. Desde los sistemas tradicionales hasta los
            más actuales tipo Mecanoviga, Cointecs o similares, así como
            actuaciones en todo tipo de patología estructural (aluminosis,
            desintegración de vigas de madera, oxidación vigas metálicas etc. )
            Al tratarse de trabajos especialmente delicados, los realizamos
            siempre siguiendo las indicaciones de arquitectos especializados y
            respetando escrupulosamente todas las medidas de seguridad,
          </p>
        </div>
        <div className="projecto1">
          <h3>Vivienda unifamiliar Igualada</h3>
          <div className="proyectoImg04"></div>
          <p>
            Las intervenciones en las cubiertas de los edificios son muy
            diversas y nosotros, en nuestra dilatada experiencia de más de 18
            años que nos avalan, hemos podido realizar cada una de ellas. Desde
            la restauración total mediante la impermeabilización con los
            distintos materiales homologados, empezando por los más
            tradicionales como la tela asfáltica o la auto protegida hasta los
            más innovadores como las imprimaciones de poliuretanos o la
            poliurea. Realizamos cubiertas invertidas y tradicionales
            consiguiendo el aislamiento térmico deseado.
          </p>
        </div>
      </div>
    </>
  );
}
