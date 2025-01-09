import React from "react";
import { useEffect, useState } from "react";
import Comb from "../Comb/Comb";
import styles from "./styles.module.css";
import Loading1 from "../Loading1/Loading1";
let combs1;

function Combinations() {
  const [combs, setCombs] = useState([]);

  useEffect(() => {
    fetch(
      "https://jellybellywikiapi.onrender.com/api/combinations?pageIndex=1&pageSize=150"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        setCombs(json);
      });
  }, []);

  console.log(combs.items);
  combs1 = structuredClone(combs.items);

  if (combs1) {
    return (
      <div>
        <div className={styles.Beans_headline}>
          Now please explore our combinations ...
        </div>
        <div className={styles.Beans_wrap}>
          {combs1.map((el) => (
            <Comb comb1={el} />
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

export default Combinations;
