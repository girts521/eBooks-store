import React from "react";
import Footer from "../../Components/Footer/Footer";
import ProductCard from "../../Components/ProductCard/ProductCard";
import styles from "./styles.module.scss";

const Shop: React.FC = () => {
  const imgNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Store</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            voluptates dolorum.
          </h2>
        </div>

        <div className={styles.categories}>
            <div>
            <ul>
                <li>All</li>
                <li>Audio</li>
                <li>Video</li>
                <li>Books</li>
                <li>Other</li>
            </ul>
            </div>
            <div className={styles.search}>
             <label htmlFor="">Search: </label>  <input type="text" />
            </div>
        </div>

        <div className={styles.productsContainer}>
          {imgNums.map((num) => {
            return (
              <ProductCard
                productName="The power of Dreams"
                productPrice="3$"
                img={`https://coach-life.highseastudio.com/wp-content/uploads/2021/01/${num}.jpg`}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
