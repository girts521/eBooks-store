import React from "react";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
          exercitationem cum! Ab, recusandae numquam, dignissimos in fuga quas
          praesentium ipsam dolorum neque nam, modi sequi veritatis libero
          corrupti eligendi quo.
        </p>
        <div className={styles.headerButton}>SHOP NOW!</div>
      </div>
    </div>
  );
};

export default Header;
