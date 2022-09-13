import React from "react";
import styles from "./Navbar.module.scss";
import icon from "../../../assets/images/main.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const element = <FontAwesomeIcon icon={faBeer} transform={{ flipX: 45, rotate: -45 }} />;
  const element2 = <FontAwesomeIcon icon={faBeer} transform={{ rotate: -45 }} />;

  return (
    <article className={styles.navbar}>
      <Link to="/brewdog-app/"><img src={icon} alt="brewdog-icon" className={styles.navbar__logo} /></Link>
      <Link to="/brewdog-app/">
        <h1 className={styles.title}>BREWDOG</h1>
      </Link>
      <div className={styles.navbar__random}>
        <Link to="/random">
          <h2 className={styles.random}>{element}{element2}</h2>
        </Link>
      </div>
    </article>
  );
};

export default Navbar;
