import React, { useEffect } from "react";
import "../css/ContentHexagono.css";
const ContentHexagono = () => {
  useEffect(() => {
    const cuadros = document.getElementsByClassName("cuadros");
    for (let j = 0; j < cuadros.length; j++) {
      if (cuadros[j].children.length === 0) {
        for (let index = 0; index < 12; index++) {
          cuadros[j].innerHTML += `
      <svg
      height="110"
      width="102"
      style=" padding-top: 5px;"
      >
      <path
      d="M4,70 L50,100 v-65 L3,10 v60"
      stroke="black"
        stroke-width="2"
        fill="gray"
        class="red"
      />
      <path
      d="m50,102 l50,-30 v-55 l-50,20 v64"
        stroke="black"
        stroke-width="1"
        fill="black"
        class="red"
      />
      <path
      d="m98,17 l-50,-14 l-45,5 L50,37 L100,17"
        stroke="black"
        stroke-width="1"
        fill="white"
        class="red"
      />
    </svg>`;
        }
      }
    }
    const hexag = document.getElementsByClassName("cont_hex");
    const numHexag = 11;
    for (let index = 0; index < hexag.length; index++) {
      if (
        hexag[index].children.length === 1 ||
        hexag[index].children.length === 0
      ) {
        for (let j = 0; j < numHexag; j++) {
          hexag[index].innerHTML += `
        <div class="hexagon"></div>`;
        }
      }
    }
    const poli = document.getElementsByClassName("red");
    for (let index = 0; index < poli.length; index++) {
      poli[index].addEventListener("mouseover", () => {
        poli[index].style.transition = "0s";
        poli[index].style.stroke = "yellow";
      });
    }
    let contador = 0;
    let contador2 = 0;
    /**Animación de colores de hexagono */
    const hexagono=document.getElementsByClassName('hexagon');

    setInterval(() => {
      let lognHexag=hexagono.length;
      if(contador2!==lognHexag){

        for (let index = 0; index < contador2; index++) {
          hexagono[index].style.transition="0s";
          hexagono[index].style.background="red";
          if(index!==0){
            hexagono[index-1].style.background="";
          }
        }
        contador2++;
      }else{
        contador2=0;
      }
    }, 600);
    /**Animación de colores de cubos */
    setInterval(() => {
      let longCube = poli.length;
      if (contador !== longCube) {
        for (let index = 0; index < contador; index++) {
          poli[index].style.stroke = "yellow";
        }
        contador++;
      } else {
        for (let index = 0; index < contador; index++) {
          poli[index].style.stroke = "";
        }
        contador = 0;
      }
    }, 500);
  });

  return (
    <>
      {/*Credits: Tanisha Smith ->https://codepen.io/techyt/pen/qBOBEJL*/}
      <div className="box_container">
        <div className="row cont_hex"></div>
        <div className="row cont_hex">
          <div className="hexagon"></div>
        </div>
        <br />
        <br />
        <div className="row texto_animacion">
          <h3>
            Da a tus usuarios una web animada <br />Y una experiencia única.
          </h3>
        </div>
        <br />
        <br />
        <div className="row d-flex flex-row">
          <div className="hexagon__border cuadros"></div>
        </div>
      </div>
    </>
  );
};
export default ContentHexagono;
