import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Menu() {
  return (
    <nav className={styles.wrap}>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="beans">Beans</NavLink>
      <NavLink to="combinations">Combinations</NavLink>
      <NavLink to="recepies">Recepies</NavLink>
      <NavLink to="facts">Facts</NavLink>
      <NavLink to="history">History</NavLink>
      <NavLink to="review">Review</NavLink>
    </nav>
  );
}

export default Menu;
