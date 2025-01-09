import React from "react";
import styles from "./styles.module.css";

function Recepie(props) {
  let { recepies1 } = props;
  console.log(recepies1.beanId);
  let ingredients = "";
  let directions = "";
  recepies1.ingredients.forEach((el) => {
    ingredients = ingredients + el + `;` + `\n`;
  });

  recepies1.directions.forEach((el) => {
    directions = directions + el + `;\n`;
  });

  return (
    <div className={styles.wrap}>
      <h4>{recepies1.name}</h4>
      <p>
        <img src={recepies1.imageUrl} className={styles.img} />
      </p>
      <p className={styles.description}>{recepies1.description} </p>

      <p className={styles.description}>
        <span className={styles.span}>Ingredients: </span>
        {ingredients}
      </p>

      <p className={styles.description}>
        <span className={styles.span}>Directions: </span> {directions}{" "}
      </p>
    </div>
  );
}

export default Recepie;
