import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import '../css/HomeIcons.css';
const Icons = () => {
  //Accion para aumentar el tamaño de los iconos
  useEffect(() => {
    const icons = document.getElementsByClassName("social_icons");
    console.log(icons);
    for (let index = 0; index < icons.length; index++) {
      icons[index].addEventListener("mouseover", () => {
        icons[index].style.height = "30px";
        icons[index].style.width = "30px";
      });
      icons[index].addEventListener("mouseout", () => {
        icons[index].style.height = "25px";
        icons[index].style.width = "25px";
      });
    }
  });

  return (
    <div className="social_media">
      ÚNETE A NOSOTROS &nbsp;|&nbsp;&nbsp;&nbsp;
      <SocialIcon
        url="https://www.example.com"
        label="Our portfolio"
        bgColor="#727171"
        style={{ height: 25, width: 25 }}
        className="social_icons"
        title="compartir"
      />
      &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
      <SocialIcon
        network="twitter"
        url="https://www.twitter.com"
        bgColor="#727171"
        style={{ height: 25, width: 25 }}
        className="social_icons"
        title="twitter"
      />
      &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
      <SocialIcon
        network="instagram"
        url="https://www.instagram.com"
        bgColor="#727171"
        style={{ height: 25, width: 25 }}
        className="social_icons"
        title="instagram"
      />
      &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
      <SocialIcon
        network="github"
        url="https://www.github.com"
        bgColor="#727171"
        style={{ height: 25, width: 25 }}
        className="social_icons"
        title="github"
      />
      &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
      <SocialIcon
        network="whatsapp"
        url="https://www.whatsapp.com"
        bgColor="#727171"
        style={{ height: 25, width: 25 }}
        className="social_icons"
        title="whatsapp"
      />
      &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
      <SocialIcon
        network="email"
        url="https://www.gmail.com"
        bgColor="#727171"
        style={{ height: 25, width: 25 }}
        className="social_icons"
        title="email"
      />
      &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
    </div>
  );
};
export default Icons;
