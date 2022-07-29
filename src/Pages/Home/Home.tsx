import React from "react";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Header from "../../Components/Header/Header";
import Courses from "../../Components/Courses/Courses";
import styles from "./styles.module.scss";
import Reviews from "../../Components/Reviews/Reviews";
import ExampleCategory from "../../Components/ExampleCategory/ExampleCategory";
import Footer from "../../Components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <AboutUs />
        <Courses />
        <Reviews />
        <ExampleCategory />
      </div>
      <Footer />
    </>
  );
};

export default Home;
