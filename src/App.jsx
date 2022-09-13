import React from "react";
import Navbar from "./Components/container/Navbar/Navbar";
import styles from "./App.module.scss";
import Links from "./Components/Links/Links";

const App = () => {
  return (
    <>
      <div className={styles.app}>
      <Navbar />
      <Links />
      </div>
    </>
  );
};

export default App;
