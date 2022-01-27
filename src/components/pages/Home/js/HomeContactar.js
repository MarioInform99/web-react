import React, { Component } from "react";
import "../css/HomeContactar.css";
export default class HomeContactar extends Component {
    OnClick(){
        alert('Hola');
    }
  componentDidMount() {
    const btnContactar = document.getElementById("contactar");
    console.log(btnContactar);
  }
  render() {
    return (
        <div className="contactarme">
          <input
            type="button"
            className="contactar"
            id="contactar"
            value="CONTACTAR"
            onClick={this.OnClick}
          />
          <button className="leer__mas">LEER MÁS </button>
        </div>
    );
  }
}
