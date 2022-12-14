import React from "react";
import styles from "./style.module.scss";
import Logo from "../../assets/images/logo.png";
import Footer from "../../components/footer";

import Carousel from "../../components/carousel";
import { Link } from "react-router-dom";
function Main() {
  return (
    <div>
      <Link to="/add">
        <button className={styles.newRecord}>Add new record</button>
      </Link>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" width="278px" />
      </div>
      <div className={styles.searchClass}>
        <p className={styles.textAuto}>Find in records</p>

        <div className={styles.searchContext}>
        <form className={styles.nosubmit}>
          <input className={styles.nosubmit} type="search" placeholder="Search..." />
        </form>
          <button className={styles.searchBtn}>
            Search
          </button>
          </div>
      </div>

      <div>
        <Carousel />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
