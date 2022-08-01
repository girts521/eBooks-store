import React from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const NavMenu: React.FC<{
  func: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ func }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <ul>
        <li
          onClick={() => {
            navigate("/");
            func(false);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/shop");
            func(false);
          }}
        >
          Shop
        </li>
        <li
          onClick={() => {
            navigate("/product");
            func(false);
          }}
        >
          Product
        </li>
        <li
          onClick={() => {
            navigate("/cart");
            func(false);
          }}
        >
          Cart
        </li>
        <li>Theme 3</li>
        <li>Theme 4</li>
        <li>Theme 5</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default NavMenu;
