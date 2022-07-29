import React from "react";
import styles from "./styles.module.scss";

const Reviews: React.FC = () => {
  return (
    <div className={styles.reviews}>
      <p className={styles.reviewText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        aperiam illo ab, quas, sit iure molestias suscipit asperiores expedita
        perferendis inventore, nostrum labore dolores! Quidem adipisci eos
        laborum cumque quo.
      </p>
      <p className={styles.author}>
        - Amanda Walsh <br />
        <span>CEO at Storesy</span>
      </p>
      <div className={styles.quote}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="98"
          height="76"
          viewBox="0 0 98 76"
        >
          <path
            fill="#D1A976"
            fill-opacity=".2"
            d="M43.68 75.4V40.12H26.4v-2.64c0-12 4.4-18 13.2-18V.76c-12.96 0-22.8 3.96-29.52 11.88C3.36 20.56 0 30.68 0 43c0 10.72 2.08 21.52 6.24 32.4h37.44zm53.76 0V40.12H80.16v-2.64c0-12 4.4-18 13.2-18V.76C80.4.76 70.6 4.72 63.96 12.64 57.32 20.56 54 30.68 54 43c0 11.2 2 22 6 32.4h37.44z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Reviews;
