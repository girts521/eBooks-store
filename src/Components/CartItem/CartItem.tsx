import React from "react";
import styles from "./styles.module.scss"
import Quantity from "../Quantity/Quantity";

const CartItem: React.FC = () => {
    return(
        <div className={styles.cartItem}>
            <div className={styles.productImg}>
              <img
                src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/1.jpg"
                alt=""
              />
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productName}>Take time for your life</div>

              <div className={styles.productQuantity}>
                <Quantity />
              </div>

              <div className={styles.price}>
                $ 34
              </div>
            </div>
          </div>   
    )
}

export default CartItem