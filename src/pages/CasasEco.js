import "./CasasEco.css";
import { useEffect } from "react";

export default function CasasEco() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="imgSuperior">
        <h1>
          Construcción casas industrializadas <br />
          Ecosostenibles en Barcelona
        </h1>
      </div>
      <div className="projectsSpaceCasas">
        <div className="casasTerminadas">
          <h3>CASAS DE DISEÑO Y RÚSTICAS RESPETUOSAS. </h3>

          <div className="proyectoCasas">
            <div className="casasImg1"></div>
          </div>
          <div className="proyectoCasas">
            <div className="casasImg2"></div>
          </div>
          <p>
            Creamos viviendas industrializadas unifamiliares con un sistema
            innovador y ecológico: <br></br>
            <br></br>
            <strong>STEEL FRAME.</strong> <br></br>
            <br></br>Con este método, podemos adaptarnos a tus gustos y
            preferencias, sin importar lo que sueñes para tu nuevo hogar. Tú nos
            cuentas cómo lo quieres y nosotros lo hacemos realidad. En este tipo
            de viviendas, los <strong>tiempos de construcción</strong> de ésta
            es <strong>mucho menor</strong> en comparación a la construcción
            tradicional, lo que se traducirá en un{" "}
            <strong>ahorro de costes y molestias,</strong> cumpliendo en todo
            momento con todas las normativas, garantías de calidad y seguridad.
            Además, tendrás el apoyo de un equipo profesional y experimentado de
            arquitectos, ingenieros y diseñadores, que te asesorarán y
            resolverán todas tus dudas en cada paso del proyecto. Nuestras
            viviendas incluyen todo lo que necesitas para vivir cómodamente:
            equipamientos de calidad (horno, placa inducción, sanitarios,
            griferías …) y acabados de lujo. Y si quieres hacer algún cambio, no
            te preocupes: para nosotros, cada reto es una oportunidad de mejorar
            y satisfacer tus expectativas. Así, te entregaremos una vivienda
            eficiente, sostenible y personalizada, que hará realidad tus sueños.{" "}
            <br></br>
            Tu casa será eficiente en términos de energía, lo que te ayudará a
            ahorrar en tus facturas y a reducir tu huella de carbono. <br></br>
            En resumen, construimos casas que son perfectas para ti y para el
            planeta. <br></br>
            <br></br>
            <strong>
              ¿Estás listo para empezar a construir tus sueños con nosotros?
            </strong>
          </p>
        </div>
        <div className="sistema-Constructivo">
          <h3>ESTRUCTURA DE ACERO GALVANIZADO. </h3>
          <div className="casasImg3"></div>
          <p>
            Utilizamos un sistema constructivo basado en acero galvanizado
            reciclado, diseñado exclusivamente para ti, adaptándose a tus deseos
            y necesidades. Imagina que tu casa es como un cuerpo humano.{" "}
            <br></br>La estructura de acero es el esqueleto, fuerte y
            resistente, que sostiene todo. Una vez montada, cubrimos esta
            estructura con varias capas de materiales técnicos y aislantes, como
            el tablero OSB y el sistema sate, que conforman la piel de la casa.{" "}
            <br></br>Esta piel, junto con la cimentación que se realiza en los
            trabajos iniciales, crea un cuerpo cálido, confortable y robusto
            para tu nuevo hogar. Pero no nos detenemos ahí. <br></br>Sellamos el
            interior de la casa con trasdosados de PYL o Drywall, añadiendo más
            material aislante entre el exterior y el interior. Esto asegura que
            tu casa esté bien aislada y sea energéticamente eficiente. <br></br>
            El resultado de todo este trabajo es una casa que no solo es hermosa
            y cómoda, sino también respetuosa con el medio ambiente. <br></br>
            Nuestras casas obtienen las certificaciones energéticas más altas,
            como la de tipo A, e incluso pueden llegar a obtener certificaciones
            de Passive house.
          </p>
        </div>
        <div className="sistema-Constructivo">
          <h3>MEJORAS SEGÚN PRESUPUESTO INICIAL. </h3>
          <div className="casasImg4"></div>
          <p>
            En nuestra empresa, nos dedicamos a hacer realidad los sueños de
            tener un hogar perfecto. Nos enfocamos en la construcción de
            viviendas industrializadas unifamiliares utilizando el sistema
            constructivo de Steel Frame, garantizando un hogar cómodo y seguro.
            Durante la fase de cimentación, utilizamos casetones prefabricados
            para formar un forjado sanitario. Este método asegura un excelente
            aislamiento para su hogar, ya que evita el contacto directo con el
            subsuelo. Además, permite una fácil instalación de la red de
            saneamiento. Pensando en su comodidad, incluimos en nuestro
            presupuesto inicial el sistema de Aerotermia para Agua Caliente
            Sanitaria (ACS). Este sistema puede ser combinado, si así lo desea,
            con climatización mediante bomba de calor por conductos, suelo
            radiante o radiadores. Conscientes de la importancia de cuidar el
            medio ambiente y de la necesidad de ahorrar en la factura eléctrica,
            ofrecemos la instalación de placas fotovoltaicas. Esta inversión se
            amortiza a medio plazo, lo que se traduce en un ahorro significativo
            para usted. Nuestro compromiso es satisfacer las necesidades de
            nuestros clientes más exigentes, sin poner límites a las soluciones
            que podemos proporcionar. Porque para nosotros, su hogar es mucho
            más que una construcción, es el lugar donde se construyen sueños y
            se crean recuerdos.<br></br>
            <br></br> ¡Permítanos ser parte de su sueño!
          </p>
        </div>
      </div>
    </>
  );
}
