import React from "react";
import styles from "./CardButton.module.scss";

const CardButton = (props) => {
  const { name, handleViewMore } = props;
  return (
    <button className={styles.button} onClick={handleViewMore}>
      {name}
    </button>
  );
};

export default CardButton;
