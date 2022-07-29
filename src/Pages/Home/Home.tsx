import React from "react";
import Header from "../../Components/Header/Header";
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  return (
    <>
    <Header />

      <div className={styles.container}>
        <div className={styles.aboutUs}>
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            animi. Ratione, mollitia. Consequatur enim laborum possimus facilis
            iste error tempora qui quis, eum minus magni consequuntur fuga quas
            tenetur explicabo? Nostrum, error perspiciatis nisi provident
            ratione vero distinctio sunt dolor aperiam tenetur doloremque, natus
            enim et corporis maxime quaerat fuga voluptatum molestiae
            consequatur quisquam.
          </p>
          <div className={styles.aboutUsBtn}>READ MORE</div>
        </div>

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

        <div className={styles.reviews}>
          <p className={styles.reviewText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            aperiam illo ab, quas, sit iure molestias suscipit asperiores
            expedita perferendis inventore, nostrum labore dolores! Quidem
            adipisci eos laborum cumque quo.
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

        <div className={styles.exampleCategory}>
          <h1>Personal Development products</h1>

          <div className={styles.productsContainer}>
            <div className={styles.productCard}>
              <div className={styles.productImg}>
                <img
                  src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/2.jpg"
                  alt=""
                />
              </div>

              <div className={styles.productDescription}>
                <h2>The power of Dreams</h2>
                <div>3$</div>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImg}>
                <img
                  src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/3.jpg"
                  alt=""
                />
              </div>

              <div className={styles.productDescription}>
                <h2>The power of Dreams</h2>
                <div>3$</div>
              </div>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productImg}>
                <img
                  src="https://coach-life.highseastudio.com/wp-content/uploads/2021/01/4.jpg"
                  alt=""
                />
              </div>

              <div className={styles.productDescription}>
                <h2>The power of Dreams</h2>
                <div>3$</div>
              </div>
            </div>
          </div>
          <div className={styles.shopAll}>
            <p> SHOP ALL</p>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
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

        <div className={styles.footerInfo}>
          <div className={styles.questions}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                fill="#D1A976"
                fill-rule="evenodd"
                d="M20.5 26c2 0 2-3 0-3s-2 3 0 3zM16 15.54c0-2.327 1.972-3.54 4-3.54 1.972 0 4 1.213 4 3.54v.302c0 1.315-.767 2.529-2.028 3.135l-.767.354v.556c0 .607-.548 1.113-1.205 1.113s-1.205-.506-1.205-1.113v-.91c0-.606.328-1.162.93-1.466l1.097-.556c.493-.253.767-.658.767-1.163v-.253c0-1.213-1.425-1.264-1.59-1.264-.163 0-1.588.051-1.588 1.264 0 .607-.548 1.112-1.206 1.112-.657 0-1.205-.505-1.205-1.112zm1.16 17.28c.93.12 1.88.18 2.84.18 9.93 0 18-6.5 18-14.5S29.93 4 20 4 2 10.5 2 18.5c0 2.54.79 4.95 2.32 7.11.48.69 1.03 1.34 1.66 1.97l-.44 2.32-.858 4.55a1 1 0 0 0 1.388 1.1l5.08-2.25 2.67-1.18c1.08.32 2.2.55 3.34.7zM0 18.5C0 9.39 8.95 2 20 2s20 7.39 20 16.5S31.05 35 20 35c-2.1 0-4.12-.27-6.02-.77l-8.831 3.91a2 2 0 0 1-2.776-2.199L3.83 28.2C1.42 25.48 0 22.13 0 18.5z"
              />
            </svg>
            <h2>HAVE QUESTIONS?</h2>
            <p>Visit our FAQs</p>
          </div>

          <div className={styles.contact}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                fill="#D1A976"
                fill-rule="evenodd"
                d="M4.432 9.059l14.32 11.437a2 2 0 0 0 2.496 0l14.32-11.437A1.793 1.793 0 0 0 35.111 9H4.89c-.158 0-.31.02-.457.059zm-1.38 1.47c-.034.15-.052.309-.052.471v18c0 1.105.846 2 1.889 2H35.11C36.154 31 37 30.105 37 29V11c0-.162-.018-.32-.053-.472L21.245 23.011a2 2 0 0 1-2.49 0L3.053 10.528zM4.8 7h30.4c2.099 0 3.8 1.79 3.8 4v18c0 2.21-1.701 4-3.8 4H4.8C2.701 33 1 31.21 1 29V11c0-2.21 1.701-4 3.8-4z"
              />
            </svg>
            <h2>CONTACT ME</h2>
            <p>info@example.com</p>
          </div>

          <div className={styles.media}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <g fill="#D1A976" fill-rule="evenodd">
                <path d="M21 32.965V38h5.125c.483 0 .875.448.875 1s-.392 1-.875 1h-12.25c-.483 0-.875-.448-.875-1s.392-1 .875-1H19v-5.035C11.735 32.452 6 26.395 6 19v-4a1 1 0 0 1 2 0v4h24v-4a1 1 0 0 1 2 0v4c0 7.396-5.735 13.452-13 13.965zM8 19c0 6.627 5.373 12 12 12s12-5.373 12-12H8z" />
                <path d="M20 2c-3.866 0-7 3.419-7 7.636v8.728C13 22.58 16.134 26 20 26s7-3.419 7-7.636V9.636C27 5.42 23.866 2 20 2zm0-2c4.97 0 9 4.34 9 9.692v8.616C29 23.66 24.97 28 20 28s-9-4.34-9-9.692V9.692C11 4.34 15.03 0 20 0z" />
              </g>
            </svg>
            <h2>MEDIA INQUIRES</h2>
            <p>press@example.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
