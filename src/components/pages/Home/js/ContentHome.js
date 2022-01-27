import React, { Component } from "react";
import "../css/ContentHome.css";
import img1 from "../../../../img/development-4536630_1280.png";
export default class ContentHome extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          className="contenido"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
            <br />
            <div>
            <img src={img1} alt="img1" id="img1" />
                  textoLorem Ipsum es simplemente el texto de relleno de las imprentas
            y archivos de texto. Lorem Ipsum ha sido el texto de relleno
            estándar de las industrias desde el año 1500, cuando un impresor (N.
            del T. persona que se dedica a la imprenta) desconocido usó una
            galería de textos y los mezcló de tal manera que logró hacer un
            libro de textos especimen. No sólo sobrevivió 500 años, sino que
            tambien ingresó como texto de relleno en documentos electrónicos,
            quedando esencialmente igual al original. Fue popularizado en los
            60s con la creación de las hojas "Letraset", las cuales contenian
            pasajes de Lorem Ipsum, y más recientemente con software de
            autoedición, como por ejemplo Aldus PageMaker, el cual incluye
            versiones de Lorem Ipsum.
            </div>
        </div>
        <div className="fondo_home"></div>
      </div>
    );
  }
}
