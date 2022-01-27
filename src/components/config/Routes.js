import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home/js/Home";
import Educacion from "../pages/Education/js/Education.js";

//Recibimos los props que son las propiedades que nos pasan
const Routes = (props) => {
  //Mostramos por consola lo que nos pasan por los atributos o propiedades
  //Guardamos en una variables el contenido
  //Link renderiza un enlace "<a href=>"
  let listLink = props.menus.map((datos) => (
    <li key={datos.name}>
      <Link to={datos.path} >{datos.name}</Link>
    </li>
  ));

  return (
    <Router>
    <div className="nav__menu">
      <ul>
        <li>
          <div className="letras_logo">MSPOL</div>
        </li>
        {listLink}
      </ul>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/servicios" component={Home}/>
        <Route exact path="/consultoria" component={Educacion}/>
      </Switch>
      </div>
    </Router>
  );
};
export default Routes;
