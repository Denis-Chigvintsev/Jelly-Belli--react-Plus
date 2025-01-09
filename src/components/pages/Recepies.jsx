import React from "react";
import { useEffect, useState } from "react";
import Recepie from "../Recepie/Recepie";
import styles from "./styles.module.css";
import Loading1 from "../Loading1/Loading1";
let recepies1;

function Recepies() {
  const [recepies, setRecepies] = useState([]);

  useEffect(() => {
    fetch(
      "https://jellybellywikiapi.onrender.com/api/Recipes?pageIndex=1&pageSize=50"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        setRecepies(json);
      });
  }, []);

  console.log(recepies.items);
  recepies1 = structuredClone(recepies.items);

  if (recepies1) {
    return (
      <div>
        <div className={styles.Beans_headline}>
          Explore our Fantastic Recepies ...
        </div>
        <div className={styles.Beans_wrap}>
          {recepies1.map((el) => (
            <Recepie recepies1={el} />
          ))}
        </div>
      </div>
    );
  } else
    return (
      <div className={styles.l}>
        <Loading1 />
      </div>
    );
}

export default Recepies;
