import React from "react";
import { useRouteError } from "react-router-dom/dist";
import styles from "./errorpage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorHeading}>Oops!</h1>
      <p className={styles.errorMessage}>
        Sorry, an unexpected error has occured.
      </p>
      <p className={styles.errorDetails}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
