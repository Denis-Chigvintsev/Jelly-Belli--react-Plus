import React from "react";
import styles from "./styles.module.css";

function Comb(props) {
  let { comb1 } = props;
  // console.log(comb1.combId);
  let description = "";

  comb1.tag.forEach((el) => {
    description = description + el;
  });

  return (
    <div className={styles.wrap}>
      <h4>{comb1.name}</h4>
      <p className={styles.description}>{description} </p>
    </div>
  );
}

export default Comb;
