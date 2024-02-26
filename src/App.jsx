import "./App.css";
import FoodList from "./Components/FoodList";
import Search from "./Components/Search";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import { useState } from "react";
import "./App.css";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  );
}
