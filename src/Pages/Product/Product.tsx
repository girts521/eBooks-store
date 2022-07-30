import React from "react";
import ExampleCategory from "../../Components/ExampleCategory/ExampleCategory";
import Footer from "../../Components/Footer/Footer";
import styles from "./styles.module.scss";

const Product: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.allImages}>
            <div className={styles.smallImg}>
              <img
                src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/1.jpg"
                alt=""
              />
            </div>
            <div className={styles.smallImg}>
              <img
                src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/1.jpg"
                alt=""
              />
            </div>
            <div className={styles.smallImg}>
              <img
                src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/1.jpg"
                alt=""
              />
            </div>
          </div>

          <div className={styles.mainImage}>
            <img
              src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/1.jpg"
              alt=""
            />
          </div>

          <div className={styles.productInfo}>
            <div className={styles.productName}>
            Take Time for Your Life Book
            </div>

            <div className={styles.rating}>
                <img src="fullStar.png" alt="" />
                <img src="fullStar.png" alt="" />
                <img src="fullStar.png" alt="" />
                <img src="fullStar.png" alt="" />
                <img src="halfStar.png" alt="" />
                <p>4.5 <span>896 reviews</span></p>
            </div>

            <div className={styles.price}>$45</div>

            <div className={styles.shortDescription}>This is a simple product.</div>

            <div className={styles.quantityContainer}>
              <div className={styles.quantity}>
                <div>+</div>
                <div>1</div>
                <div>-</div>
              </div>

              <div className={styles.addToCart}>ADD TO CART</div>
            </div>

            <div className={styles.category}>Category: Self development</div>
          </div>


        </div>
        <div className={styles.moreInfo}>
        <h1>Description</h1>
            <div className={styles.productDescription}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus veniam obcaecati atque incidunt, in aliquid
              asperiores. Corrupti fugit earum expedita totam doloremque
              debitis, delectus labore rem exercitationem dolorum, rerum quos.
            </div>
            {/* <div className={styles.additionalInfo}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              labore, odit,
            </div>
            <div className={styles.reviews}></div> */}
          </div>

        <ExampleCategory />
        <Footer />
      </div>
    </>
  );
};

export default Product;
