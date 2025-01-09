import React from "react";
import styles from "./styles.module.css";

function Review() {
  async function sendData(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let feedback_text = e.target.feedback.value;
    let feedback = { name, email, feedback_text };
    console.log(feedback);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.feedback.value = "";
    console.log(JSON.stringify(feedback, null, "\t"));
  }
  return (
    <div className={styles.review_wrap}>
      <div className={styles.Beans_headline}>
        Please send us your comments on Jelly Belly
      </div>
      <form onSubmit={sendData}>
        <br />
        <label className={styles.label1}>
          Your Name:
          <br />
          <input type="text" className={styles.input1} required name="name" />
        </label>
        <br />
        <br />
        <label>
          Your Email :
          <br />
          <input type="email" className={styles.input1} required name="email" />
        </label>
        <br />
        <br />
        <label>
          Your Comments:
          <textarea
            class={styles.textarea}
            name="feedback"
            rows="10"
          ></textarea>
        </label>
        <br />
        <br />
        <button type="submit">Send your comments</button>
        <br />
      </form>
    </div>
  );
}

export default Review;
