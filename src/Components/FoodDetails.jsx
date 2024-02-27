import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom/dist";

export default function FoodDetails() {
  const { foodId } = useParams();
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (foodId) {
      async function fetchFood() {
        setIsLoading(true);
        const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
        const API_KEY = "9df5b67d518f4dc18df850dc0e136f71";
        try {
          const res = await fetch(`${URL}?apiKey=${API_KEY}`);
          const data = await res.json();
          setFood(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching food details:", error);
          setIsLoading(false);
        }
      }
      fetchFood();
    }
  }, [foodId]);

  if (!food) {
    // Render nothing if food is null
    return null;
  }
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt=" " />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            🧑🏻‍🧑🏻‍🧒🏼<strong>serving size - {food.servings} people</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h2 className={styles.heading}>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2 className={styles.heading}>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
