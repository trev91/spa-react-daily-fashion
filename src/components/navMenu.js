import React from "react";
import { scaleDown as Menu } from "react-burger-menu";

export default class NavMenu extends React.Component {
  render() {
    return (
      <Menu pageWrapId={"page"} outerContainerId={"App"}>
        <a id="shop" className="menu-item" href="/">
          Shop
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    );
  }
}
