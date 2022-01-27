import React, {useEffect} from "react";
//Mover las letras falta el estilo
const LetterMove = () => {
  //JSON de para cambiar de lenguajes de Hola mundo
  //Si añades otro objeto en el JSON, recuerda modificar la condicional del indexJSON, para evitar
  //El error de ejecución
  const helloworld = [
    {
      name: "LENGUAJE",
      script: "Hola mundo",
    },
    {
      name: "JAVASCRIPT",
      script: "console.log('Hola mundo');",
    },
    {
      name: "PHP",
      script: "echo 'Hola mundo';",
    },
    {
      name: "PYTHON",
      script: "print('Hola mundo');",
    },
  ];

  //useEffect es un hook de efecto
  //la funcion principal es que es componenter realizar algo despues del renderizado
  // document.addEventListener('DOMContentLoaded',()=>{
  //   console.log("Contenido cargado");
  //   const language=document.getElementById('language');
  //   console.log(language);
  // })
  // useEffect es un HOOK de EFECTO
  useEffect(() => {
    let indexJSON = 0;
    const textChange = document.getElementById("letters");
    let count = 0;
    setInterval(() => {
      let str = helloworld[indexJSON].script;
      let arr = str.split("");
      textChange.innerHTML += `${arr[count]}`;
      count++;
      if (count > arr.length) {
        count = 0;
        textChange.innerHTML = "&nbsp; &nbsp;&nbsp; &nbsp;";
        if (indexJSON > 2) {
          indexJSON = 0;
        } else {
          indexJSON++;
        }
      } //Evito un bucle infinito e inicializo el contador
    }, 200);
  });
  return (
    <div className="hello-world">
      <div id="letters">&nbsp; &nbsp;&nbsp; &nbsp;</div>
    </div>
  );
};
export default LetterMove;
