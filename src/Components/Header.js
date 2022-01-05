import React, { Component } from "react";
import logo from "../assets/Logo.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center my-3">
        <img src={logo} alt="logo-plane" />
      </div>
    );
  }
}
