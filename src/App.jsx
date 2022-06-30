import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/container/Navbar/Navbar";
import Main from "./Components/Home/Home";
import Random from "./Components/Random/Random";
import styles from "./App.module.scss";
import Dashboard from "./Components/container/Dashboard";

const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="allbeers" element={<Dashboard />} />
          <Route path="random" element={<Random />} />
        </Routes>
      </div>

    </>
  );
};

export default App;
