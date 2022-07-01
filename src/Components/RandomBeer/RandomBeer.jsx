import React from "react";
import axios from "axios";
import styles from "./RandomBeer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

const element2 = <FontAwesomeIcon icon={faDice} transform={{ rotate: -45 }} shake />;

// Create RandomBeer function using Punk API
class RandomBeer extends React.Component {
  state = {
    randomBeer: null,
  };

  async getRandomBeer() {
    try {
      const res = await axios.get("https://api.punkapi.com/v2/beers/random");
      this.setState({ beer: res.data[0] });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.name}>Roll the dice...</h1>
        <p>Do you feel lucky, Punk? Well? Do you?</p>

        {/* // Give button onClick function to call a random beer*/}
        <button className={styles.button} onClick={() => this.getRandomBeer()}>
        {element2}
        </button>

        <div className={styles.card}>
          {this.state.beer && (
            <img className="image" src={this.state.beer.image_url} alt=""/>
          )}

        <div className={styles.text}>
          {this.state.beer && (
            <div className={styles.name}>{this.state.beer.name}</div>
          )}
          {this.state.beer && (
            <div className={styles.tagline}>{this.state.beer.tagline}</div>
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
