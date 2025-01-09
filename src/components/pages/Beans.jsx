import React from "react";
import { useEffect, useState } from "react";
import Bean from "../Bean/Bean";
import styles from "./styles.module.css";
import Loading1 from "../Loading1/Loading1";
let beans1;

function Beans() {
  const [beans, setBeans] = useState([]);

  useEffect(() => {
    fetch(
      "https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=150"
    )
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);

        setBeans(json);
      });
  }, []);

  console.log(beans.items);
  beans1 = structuredClone(beans.items);

  if (beans1) {
    return (
      <div>
        <div className={styles.Beans_headline}>
          Have a Look Through Our Beans ...
        </div>
        <div className={styles.Beans_wrap}>
          {beans1.map((el) => (
            <Bean beans1={el} />
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

export default Beans;
