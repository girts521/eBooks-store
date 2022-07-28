import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import NavMenu from "../NavMenu/NavMenu";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth >= 1024) {
//       console.log("no burger");
//       setMenuOpen(true)
//     }
//   }, []);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <h1>navbar</h1>
      <div onClick={onClickHandler} className={styles.burger}>
        <MenuIcon />
      </div>
      {menuOpen && <NavMenu />}

      <ul className={styles.navItems}>
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

export default NavBar;
