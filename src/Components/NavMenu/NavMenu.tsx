import React from "react";
import styles from "./styles.module.scss";

const NavMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Theme 1</li>
        <li>Theme 2</li>
        <li>Theme 3</li>
        <li>Theme 4</li>
        <li>Theme 5</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default NavMenu;
