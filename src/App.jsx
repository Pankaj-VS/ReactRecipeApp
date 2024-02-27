import React, { useState, Suspense } from "react";
import "./App.css";
import Search from "./Components/Search";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

const FoodList = React.lazy(() => import("./Components/FoodList"));

export default function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Suspense fallback={<div>Loading...</div>}>
        <FoodList foodData={foodData} />
      </Suspense>
      <Outlet />
    </div>
  );
}
