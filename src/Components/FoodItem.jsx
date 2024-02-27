import { Link } from "react-router-dom/dist";
import styles from "./foodItem.module.css";

export default function FoodItem({ foodItem }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={foodItem.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={`/food-details/${foodItem.id}`} className={styles.itemButton}>
          View Recipe
        </Link>
      </div>
    </div>
  );
}
