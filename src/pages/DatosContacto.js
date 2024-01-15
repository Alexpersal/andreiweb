import "./DatosContacto.css";
//npm install @react-icons/all-files --save
import { BsFillGeoFill, BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function DatosContacto() {
  return (
    <>
      <div className="phone">
        <BsFillTelephoneFill
          style={{ fontSize: "28px", marginRight: "10px" }}
        ></BsFillTelephoneFill>
        <a href="+34632903696">+34632903696</a>
      </div>
      <div className="mail">
        <HiMail style={{ fontSize: "28px", marginRight: "10px" }}></HiMail>
        <a href="mailto:obrasintegralesbentsa@gmail.com">
          obrasintegralesbentsa@gmail.com
        </a>
      </div>
      <div className="position">
        <BsFillGeoFill
          style={{ fontSize: "28px", marginRight: "10px" }}
        ></BsFillGeoFill>
        <p>
          carrer Florida 35 - 08242 <br />
          Manresa, Barcelona
        </p>
      </div>
    </>
  );
}
