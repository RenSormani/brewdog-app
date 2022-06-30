import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styles.texts}>
        <h1>Punk API</h1>
        <h3>What's your brew, dog?</h3>
        <div className={styles.buttons}>
          <Link to="allbeers">GET BEERS</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
