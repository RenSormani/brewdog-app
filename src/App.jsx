import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/container/Navbar/Navbar";
import Random from "./Components/Random/Random";
import styles from "./App.module.scss";
import Dashboard from "./Components/container/Dashboard";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <div className={styles.app}>
      <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="allbeers" element={<Dashboard />} />
          <Route path="random" element={<Random />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
