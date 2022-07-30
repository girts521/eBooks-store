import React from "react";
import styles from "./styles.module.scss"

const Quantity: React.FC = () => {
    return(
        <div className={styles.quantity}>
        <div>+</div>
        <div>1</div>
        <div>-</div>
      </div>
    )
}

export default Quantity