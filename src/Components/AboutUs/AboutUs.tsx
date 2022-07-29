import React from "react";
import styles from "./styles.module.scss";

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <h1>ABOUT US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        animi. Ratione, mollitia. Consequatur enim laborum possimus facilis iste
        error tempora qui quis, eum minus magni consequuntur fuga quas tenetur
        explicabo? Nostrum, error perspiciatis nisi provident ratione vero
        distinctio sunt dolor aperiam tenetur doloremque, natus enim et corporis
        maxime quaerat fuga voluptatum molestiae consequatur quisquam.
      </p>
      <div className={styles.aboutUsBtn}>READ MORE</div>
    </div>
  );
};

export default AboutUs;
