import React from "react";
import { Typography } from "@mui/material";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <div className={styles.navParent}>
      <div className={styles.child1}>
        <Typography
          variant="h2"
          fontFamily="Poppins"
          fontSize="19px"
          fontWeight="bold"
          color="white"
        >
          <img src="./images/icons-1.svg" alt="logo" />
          SWAGS
        </Typography>
      </div>
      <div className={styles.child2}>
        <img src="./images/icons.svg" alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
