import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./styles.module.scss";

const ExampleCategory: React.FC = () => {
  return (
    <div className={styles.exampleCategory}>
      <h1>Personal Development products</h1>

      <div className={styles.productsContainer}>
        <ProductCard
          productPrice="3$"
          productName="The power of Dreams"
          img="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/2.jpg"
        />
        <ProductCard
          productPrice="3$"
          productName="The power of Dreams"
          img="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/3.jpg"
        />
        <ProductCard
          productPrice="3$"
          productName="The power of Dreams"
          img="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/4.jpg"
        />
      </div>
      <div className={styles.shopAll}>
        <p> SHOP ALL</p>
      </div>
    </div>
  );
};

export default ExampleCategory;
