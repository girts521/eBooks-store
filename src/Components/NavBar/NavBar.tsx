import React, { useState } from "react";
import styles from "./styles.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "../NavMenu/NavMenu";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <h1>navbar</h1>
      <div onClick={onClickHandler} className={styles.burger}>
        <MenuIcon />
      </div>
      {menuOpen && <NavMenu func={setMenuOpen} />}

      <ul className={styles.navItems}>
        <li onClick={() => {navigate('/')}}>Home</li>
        <li onClick={() => {navigate('/shop')}}>Shop</li>
        <li onClick={() => {navigate('/product')}}>Product</li>
        <li onClick={() => {navigate('/cart')}}>Cart</li>
        <li>Theme 3</li>
        <li>Theme 4</li>
        <li>Theme 5</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default NavBar;
