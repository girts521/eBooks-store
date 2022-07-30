import React, { useState } from "react";
import CartItem from "../../Components/CartItem/CartItem";
import Footer from "../../Components/Footer/Footer";
import Quantity from "../../Components/Quantity/Quantity";
import styles from "./styles.module.scss";

const Cart: React.FC = () => {
  //Temporary solution to show empty vs full cart
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <>
      <div className={styles.cartContainer}>
        {isEmpty ? (
          <div className={styles.emptyCart}>
            <h1>Sorry the cart is currently empty</h1>
            <div className={styles.backToShop}>Back to shop</div>
          </div>
        ) : (
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        )}

        {isEmpty ? (
          ""
        ) : (
          <div className={styles.totals}>
            <div className={styles.totalPrice}>
              Total: <span> $ 120</span>
            </div>
            <div className={styles.checkout}>Checkout</div>
          </div>
        )}
      </div>

      <button
        onClick={() => {
          setIsEmpty(!isEmpty);
        }}
      >
        change cart test
      </button>
      <Footer />
    </>
  );
};

export default Cart;
