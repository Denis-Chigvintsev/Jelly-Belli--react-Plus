import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../Menu/Menu";
import logo from "../../../img/logo.png";
import styles from "./styles.module.css";

function MainLayout() {
  return (
    <div className={styles.main}>
      <header className={styles.wrapper}>
        <nav className={styles.JB_wrapper}>
          <img src={logo} alt="" />
          <div className={styles.JB}>Jelly Belly</div>
        </nav>
        <Menu />
      </header>
      <Outlet />
      <footer>
        {<div className={styles.footer}>&copy; Denis Chigvintsev 2025</div>}
      </footer>
    </div>
  );
}

export default MainLayout;
