import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardButton from "./CardButton/CardButton";

// Creates individual card with a button that accesses more info from the API. 

const Card = (props) => {
  const {
    name,
    tag,
    image,
    abv,
    description,
    ingredients,
    food,
    tip,
  } = props;

  // UseState actions the viewMore state of the component CardButton
  const [viewMore, setViewMore] = useState(true);
  const handleClick = () => {
    setViewMore(!viewMore);
  };
  return (
    <article className={styles.card}>
      {viewMore && (
        <>
       <h3 className={styles.content__name}>{name}</h3>
          <img className={styles.card__img} src={image} alt={name} />
          <div className={styles.content}>
            <p className={styles.content__tag}>{tag}</p>
            <p className={styles.content__abv}>
              Alcohol volume: {abv}%
            </p>
            <div className={styles.view_more}>
              <CardButton name="View More" handleViewMore={handleClick} />
            </div>
          </div>
        </>
      )}
      {!viewMore && (
        <article className={styles.extra_content}>
          <ul className={styles.content_list}>
            <li>
              <h3 className={styles.content_list__title}>
                Product Description
              </h3>
              <p>{description}</p>
            </li>
            <li>
              <h3 className={styles.content_list__title}>Ingredients</h3>
              <p>The ingredients are : {ingredients.join(", ")}</p>
            </li>
            <li>
              <h3 className={styles.content_list__title}>Food Pairing</h3>
              <p>{food.join(" or ")}</p>
            </li>
            <li>
              <h3 className={styles.content_list__title}>Tips</h3>
              <p>{tip}</p>
            </li>
          </ul>
          <div className={styles.view_return}>
            <CardButton name="Return" handleViewMore={handleClick} />
          </div>
        </article>
      )}
    </article>
  );
};

export default Card;
