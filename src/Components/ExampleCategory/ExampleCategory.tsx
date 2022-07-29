import React from "react";
import styles from "./styles.module.scss"

const ExampleCategory:React.FC = () => {
    return (
        <div className={styles.exampleCategory}>
        <h1>Personal Development products</h1>

        <div className={styles.productsContainer}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/2.jpg"
                alt=""
              />
            </div>

            <div className={styles.productDescription}>
              <h2>The power of Dreams</h2>
              <div>3$</div>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/3.jpg"
                alt=""
              />
            </div>

            <div className={styles.productDescription}>
              <h2>The power of Dreams</h2>
              <div>3$</div>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/4.jpg"
                alt=""
              />
            </div>

            <div className={styles.productDescription}>
              <h2>The power of Dreams</h2>
              <div>3$</div>
            </div>
          </div>
        </div>
        <div className={styles.shopAll}>
          <p> SHOP ALL</p>
        </div>
      </div>
    )
}

export default ExampleCategory