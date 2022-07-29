import React from "react";
import styles from "./styles.module.scss";

const Courses: React.FC = () => {
  return (
    <>
      <div className={styles.courses}>
        <div className={styles.firstChild}>
          <div className={styles.courseCard}>
            <div className={styles.courseImg}>
              <img src="./personal-development.jpg" alt="" />
            </div>
            <div className={styles.courseName}>
              Learn how to keep improving yourself
            </div>
            <div className={styles.courseDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              modi sit unde velit suscipit nostrum, repellat aut consectetur
              odit possimus ad quia, quam rem eos commodi cumque iste atque
              minus.
            </div>
            <div className={styles.courseBtn}>LEARN MORE</div>
          </div>
        </div>

        <div className={styles.secondChild}>
          <div className={styles.courseCard}>
            <div className={styles.courseImg}>
              <img src="./peak-performance.jpg" alt="" />
            </div>
            <div className={styles.courseName}>
              Learn secrets of peak performance
            </div>
            <div className={styles.courseDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              modi sit unde velit suscipit nostrum, repellat aut consectetur
              odit possimus ad quia, quam rem eos commodi cumque iste atque
              minus.
            </div>
            <div className={styles.courseBtn}>LEARN MORE</div>
          </div>

          <div className={styles.courseCard}>
            <div className={styles.courseImg}>
              <img src="./public-speaking.jpg" alt="" />
            </div>
            <div className={styles.courseName}>
              Learn how to master public speaking in 5 minutes
            </div>
            <div className={styles.courseDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              modi sit unde velit suscipit nostrum, repellat aut consectetur
              odit possimus ad quia, quam rem eos commodi cumque iste atque
              minus.
            </div>
            <div className={styles.courseBtn}>LEARN MORE</div>
          </div>
        </div>
      </div>
      <div className={styles.viewAll}>
        <p>VIEW ALL COURSES</p>
      </div>
    </>
  );
};

export default Courses;
