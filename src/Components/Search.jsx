import React, { useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9df5b67d518f4dc18df850dc0e136f71";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    setFoodData(data.results);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
      <button className ={styles.button} onClick={handleSearch}>Search</button>
    </div>
  );
}
