import React from "react";
import styles from "./AllBeers.module.scss";
import Card from "../Card/Card";

// Call the Card component and run it through the AllBeers function, 
// mapping through each beer and passing the props as they are on the API

const AllBeers = ({ beerArr }) => {
  return (
    <article className={styles.card__container}>
      {(beerArr || []).map((beer) => {
        return (
          <Card
            key={beer.id}
            name={beer.name}
            tag={beer.tagline}
            brewYear={beer.first_brewed}
            image={beer.image_url}
            abv={beer.abv}
            ph={beer.ph}
            description={beer.description}
            ingredients={Object.keys(beer.ingredients)}
            food={beer.food_pairing}
            tip={beer.brewers_tips}
          />
        );
      })}
    </article>
  );
};

export default AllBeers;
