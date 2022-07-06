import React from "react";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.child1}>
        <img src="./images/menuSb" alt="menu" />
      </div>
      <div className={styles.child2}></div>
    </div>
  );
};

export default Dashboard;
