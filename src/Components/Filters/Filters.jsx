import React, { useState } from "react";
import styles from "./Filters.module.scss";

const Filters = (props) => {
  const { handleCheckABV, handleCheckClassic, handleCheckPH } = props;
  const [showDropDown, setShowDropDown] = useState(false);
  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <div className={styles.container}>
        {!showDropDown && (
          <h4 className={styles.filters} onClick={handleDropDown} tabIndex="2">
            FILTERS
          </h4>
        )}
        {showDropDown && (
          <>
            <h4 className={styles.close_filters} onClick={handleDropDown}>
              X
            </h4>
            <form className={styles.form_checkbox}>
              <input type="checkbox" name="abv" onClick={handleCheckABV} />
              <label htmlFor="High ABV">High ABV ({">"} 6.0%)</label>
              <input
                type="checkbox"
                name="classic"
                onClick={handleCheckClassic}
              />
              <label htmlFor="Classic Range">Classic Range </label>
              <input type="checkbox" name="ph" onClick={handleCheckPH} />
              <label htmlFor="Acidity">Acidic (PH) less than 4 </label>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Filters;
