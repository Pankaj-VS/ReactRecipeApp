import FoodItem from "./FoodItem";
import { useState } from 'react';
import styles from './FoodList.module.css'

export default function FoodList({ foodData, setFoodId }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foodData.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      {currentItems.map((foodItem) => (
        <FoodItem setFoodId={setFoodId} key={foodItem.id} foodItem={foodItem} />
      ))}
      
      <div className={styles.paginationButtonContainer}>
        {Array.from({ length: Math.ceil(foodData.length / itemsPerPage) }, (_, i) => (
          <button className={styles.paginationButton} key={i+1} onClick={() => paginate(i+1)}>{i+1}</button>
        ))}
      </div>
    </div>
  );
}
