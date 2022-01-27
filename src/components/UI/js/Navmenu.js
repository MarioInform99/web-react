import React from "react";
import Routes from "../../config/Routes.js";
import "../css/NavMenu.css";
const NavMenu = () => {
  //Routing para el menu
  const menu = [
    {
      name: "SERVICIOS",
      path: "/servicios",
    },
    {
      name: "CONSULTORIA",
      path: "/consultoria",
    },
    {
      name: "CONOCENOS",
      path: "/conocenos",
    },
    {
      name: "APRENDE",
      path: "/aprende",
    },
  ];
  return (
    <div className="container_text">
      <div className="content">
        {/**Pasamos como atributos o propiedades la variable JSON*/}
        <Routes menus={menu} />
      </div>
      <div className="footer">
        Pie
        <br />
        {/* <a target="_blank" href="https://www.zaask.es/usuario/mspol">
          <img
            src="https://www.zaask.es/widget?user=388067&widget=pro-since"
            alt=""
          />
        </a> */}
      </div>
    </div>
  );
};
export default NavMenu;
