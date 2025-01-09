import React from "react";
import styles from "./styles.module.css";

function Hystor(props) {
  let { hystory1 } = props;
  console.log(hystory1.beanId);

  return (
    <div className={styles.wrap}>
      <h4>{hystory1.year}</h4>
      <p className={styles.description}>{hystory1.description} </p>
    </div>
  );
}

export default Hystor;
