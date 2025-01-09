import React from "react";
import { useEffect, useState } from "react";
import Hystor from "../Hystor/Hystor";
import styles from "./styles.module.css";
import Loading1 from "../Loading1/Loading1";
let hystory1;

function Hystory() {
  const [hystory, setHystory] = useState([]);

  useEffect(() => {
    fetch(
      "https://jellybellywikiapi.onrender.com/api/MileStones?pageIndex=1&pageSize=50"
    )
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);

        setHystory(json);
      });
  }, []);

  console.log(hystory.items);
  hystory1 = structuredClone(hystory.items);

  if (hystory1) {
    return (
      <div>
        <div className={styles.Beans_headline}>Explore our hystory ...</div>
        <div className={styles.Beans_wrap}>
          {hystory1.map((el) => (
            <Hystor hystory1={el} />
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

export default Hystory;
