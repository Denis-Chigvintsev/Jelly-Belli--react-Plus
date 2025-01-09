import React from "react";
import styles from "./styles.module.css";

function Bean(props) {
  let { facts1 } = props;
  console.log(facts1.title);

  return (
    <div className={styles.wrap}>
      <h4>{facts1.title}</h4>

      <p className={styles.description}>{facts1.description} </p>
    </div>
  );
}

export default Bean;
