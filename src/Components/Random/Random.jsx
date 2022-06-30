import React from "react";
import styles from "./Random.module.scss";
import RandomBeer from "../RandomBeer/RandomBeer";

const Random = () => {
  return (
    <section className={styles.background}>
      <div className={styles.random}>
        <RandomBeer />
      </div>
    </section>
  );
};

export default Random;
