import React from "react";
import styles from "./styles.module.scss";

const ProductCard: React.FC<{
  img: string;
  productName: string;
  productPrice: string;
}> = ({ img, productName, productPrice }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImg}>
        <img src={img} alt={productName} />
      </div>

      <div className={styles.productDescription}>
        <h2>{productName}</h2>
        <div>{productPrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
