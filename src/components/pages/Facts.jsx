import React from "react";
import { useEffect, useState } from "react";
import Fact from "../Fact/Fact";
import styles from "./styles.module.css";
import Loading1 from "../Loading1/Loading1";
let facts1;

function Facts() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch(
      "https://jellybellywikiapi.onrender.com/api/Facts?pageIndex=1&pageSize=150"
    )
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);

        setFacts(json);
      });
  }, []);

  console.log(facts.items);
  facts1 = structuredClone(facts.items);

  if (facts1) {
    return (
      <div>
        <div className={styles.Beans_headline}>
          Have a look at the facts ...
        </div>
        <div className={styles.Beans_wrap}>
          {facts1.map((el) => (
            <Fact facts1={el} />
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

export default Facts;
