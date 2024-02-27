import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const LazyFoodDetails = React.lazy(() => import("./Components/FoodDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "food-details/:foodId",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyFoodDetails />
      </React.Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
