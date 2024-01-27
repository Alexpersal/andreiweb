import React, { useState } from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import "./Carrusel.css";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="imgCarousel">
      <BsArrowBarLeft
        className="left"
        style={{ width: "3em", height: "3em", opacity: 0.5 }}
        onClick={prevImage}
      ></BsArrowBarLeft>
      <img
        src={images[index]}
        alt=""
        style={{
          width: "90%",
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        }}
      />

      <BsArrowBarRight
        style={{ width: "3em", height: "3em", opacity: 0.5 }}
        onClick={nextImage}
      ></BsArrowBarRight>
    </div>
  );
};

export default Carousel;
