import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { CHATBOT_LINK } from "../../constant/data";
import "./navbar.css";
import { Image } from "../Image";
import { LOGO_IMAGE } from "../../constant/image";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Image style={{ height: 70, width: 70, margin: 5 }} src={LOGO_IMAGE} />
        <NavMenu>
          <NavLink to={"/contact"}>{"About Me"}</NavLink>
          <NavLink to={"/contact"}>{"Projects"}</NavLink>
          <NavLink to={CHATBOT_LINK}>{"Chatbot"}</NavLink>
          <div className="button">
            <NavLink className={"btn-title"} to={"/contact"}>
              {"Contact Me"}
            </NavLink>
          </div>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
