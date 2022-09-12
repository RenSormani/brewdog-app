import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import AllBeers from "../../AllBeers/AllBeers";
import SearchBar from "../../SearchBar/SearchBar";
import Filters from "../../Filters/Filters";

const Dashboard = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=75";

  const getBeers = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm);
  });

    //Filters beers with alcohol content greater than 6
  const handleCheckedABV = (event) => {
    event.target.checked
      ? setBeers(beers.filter((beer) => beer.abv > 6))
      : getBeers(beers);
  };

    //Filters beers from before 2010
  const handleCheckedClassic = (event) => {
    event.target.checked
      ? setBeers(beers.filter((beer) => beer.first_brewed.split("/")[1] < 2010))
      : getBeers(beers);
  };
      //Filters beers with ph less than 4
  const handleCheckedPH = (event) => {
    event.target.checked
      ? setBeers(beers.filter((beer) => beer.ph < 4))
      : getBeers(beers);
  };

  return (
    <div className={styles.container}>
      <div className={styles.functionality_bar}>
        <SearchBar
          label="beers"
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <div className={styles.functionality__filters}>
        <Filters
          handleCheckABV={handleCheckedABV}
          handleCheckClassic={handleCheckedClassic}
          handleCheckPH={handleCheckedPH}
        />
      </div>
      </div>
      <div className={styles.cards}>
        <AllBeers beerArr={filteredBeers} />
      </div>
    </div>
  );
};

export default Dashboard;
