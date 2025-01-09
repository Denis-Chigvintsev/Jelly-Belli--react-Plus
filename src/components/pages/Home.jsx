import React from "react";
import Moving_Logo from "../../img/main.gif";
import styles from "./styles.module.css";

function Home() {
  return (
    <div>
      <main>
        <div className={styles.Home_wrap}>
          <div>
            <img
              src={Moving_Logo}
              className={styles.Home_Moving_Logo}
              alt="уррраnpm start"
            />
          </div>
          <div>
            <p className={styles.Home_Welcome}>
              Welcome to the World of Jelly Belly:
            </p>
            <p className={styles.Home_Rainbow}>A Rainbow of Flavors Awaits!</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
