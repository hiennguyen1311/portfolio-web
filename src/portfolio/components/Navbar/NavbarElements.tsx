// Filename - ./components/Navbar.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../config/colors";

export const Nav = styled.nav`
  background-color: ${colors.primary};
  height: 85px;
  display: flex;
  justify-content: space-between;
  z-index: 12;
  flex-direction: row;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
  font-weight: 800;
  margin-left: auto;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-right: 16px;
  padding-left: 16px;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-left: auto;
  ]  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
