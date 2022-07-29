import React from "react";
import FooterImages from "./FooterImages/FooterImages";
import FooterInfo from "./FooterInfo/FooterInfo";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <FooterImages />
      <FooterInfo />
    </div>
  );
};

export default Footer;
