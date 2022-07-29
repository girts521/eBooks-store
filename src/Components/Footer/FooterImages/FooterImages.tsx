import React from "react";
import styles from "./styles.module.scss"

const FooterImages:React.FC = () => {
    return (
        <div className={styles.footerImages}>
        <div className={styles.footerImage}>
          <img src="footerImage1.jpg" alt="" />
        </div>
        <div className={styles.footerImage}>
          <img src="footerImage2.jpg" alt="" />
        </div>
        <div className={styles.footerImage}>
          <img src="footerImage3.jpg" alt="" />
        </div>
        <div className={styles.footerImage}>
          <img src="footerImage4.jpg" alt="" />
        </div>
        <div className={styles.footerImage}>
          <img src="footerImage5.jpg" alt="" />
        </div>
        <div className={styles.footerImage}>
          <img src="footerImage6.jpg" alt="" />
        </div>
      </div>
    )
}

export default FooterImages