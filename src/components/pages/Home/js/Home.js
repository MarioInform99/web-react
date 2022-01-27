import React, { useEffect } from "react";
import "../css/Home.css";
import icon2 from "../../../../img/shutterstock_1936306966.png";
import HomeContactar from "./HomeContactar.js";
import ContentHome from "./ContentHome.js";
import Icons from "./HomeIcons.js";

const Home = () => {
  //useEffect es un hook de efecto
  //la funcion principal es que es componenter realizar algo despues del renderizado
  // document.addEventListener('DOMContentLoaded',()=>{
  //   console.log("Contenido cargado");
  //   const language=document.getElementById('language');
  //   console.log(language);
  // })
  // useEffect es un HOOK de EFECTO
  useEffect(() => {
    setInterval(()=>{

    },5000);
    /*Animacion de escritura de MSPOL */
    let string = "MSPOL";
    const textMSPOL = document.getElementById("mspol");
    //strArr es el texto pasado a Array
    let strArr = string.split("");
    let count = 0;
    const execMSPOL = setInterval(() => {
      let text = strArr[count];
      //text guardo lo que me pasa la posicion de strArr[count]- strArr[0]=M
      if (count > strArr.length - 1) {
        textMSPOL.innerHTML = string;
        textMSPOL.style.borderRight = "0px";
      } else {
        textMSPOL.innerHTML += `${text}`;
        count++;
      }
    }, 550);
    //Paramos la funcion
    setTimeout(() => {
      clearInterval(execMSPOL); //clearInterval paramos la ejecucion de un
      //SetInterval y evitamos su ejecución todo el tiempo
    }, 4000);

    /*Mover automaticamente las letras de entrada */
    let contador = 1;
    const logo = document.getElementById("tarjeta");
    logo.style.transform = "rotateY(180deg)";
    setTimeout(() => {
      if (contador) {
        logo.style.transform = "";
      }
    }, 900);
  });

  // console.log(text);
  return (
    <div className="home">
      <br />
      <br />
      <div className="logo">
        <div className="card " id="tarjeta">
          <div className="letras card__face card__face--front" id="mspol"></div>
          <div className="card__face card__face--back email_letter">
            Tu idea en Web            
          </div>
          <div className="card__face presentacion">
            <h2>
              Empresa especializada en la Instalación de redes, Diseño y
              Desarrollo Web.&nbsp;Buscamos la mejor solución para cada uno de
              nuestro clientes.
            </h2>
          </div>
          <div className="card__face card__face--back presentacion-back">
            <h2>
            Crea tu propia página con herramientas de diseño o con tu propio código.
            (BETA)
            </h2>
          </div>
        </div>
        <HomeContactar />
        <div className="icons">
          <Icons />
        </div>
        <img src={icon2} alt="icono2" id="img__icono2" />
      </div>
      <ContentHome />
    </div>
  );
};
export default Home;
