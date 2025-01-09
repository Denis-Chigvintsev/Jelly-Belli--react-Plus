import React from "react";
import styles from "./styles.module.css";

function Bean(props) {
  let { beans1 } = props;
  console.log(beans1.beanId);

  return (
    <div className={styles.wrap}>
      <h4>{beans1.flavorName}</h4>
      <p>
        <img src={beans1.imageUrl} className={styles.img} />
      </p>
      <p className={styles.description}>{beans1.description} </p>
    </div>
  );
}

export default Bean;
