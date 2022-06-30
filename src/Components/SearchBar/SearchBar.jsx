import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <>
      <form className={styles.searchBar}>
        <label htmlFor={label}></label>

        <input
          className={styles.searchBar__input}
          placeholder="Search by name..."
          type="text"
          value={searchTerm}
          name={label}
          onInput={handleInput}
          autoFocus
          tabIndex="1"
        />
      </form>
    </>
  );
};

export default SearchBar;
