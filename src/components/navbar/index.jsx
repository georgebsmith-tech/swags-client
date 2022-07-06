import React from "react";
import { Typography } from "@mui/material";
import styles from "./index.module.css";

const Navbar = () => {
  return (
    <div className={styles.navParent}>
      <div className={styles.child1}>
        <div className={styles.imagebox}>
          <img src="./images/menuS.svg" alt="logo" width="100%" />
        </div>
        <Typography
          variant="h2"
          fontFamily="Poppins"
          fontSize="19px"
          fontWeight="bold"
          color="white"
          ml="10px"
        >
          SWAGS
        </Typography>
      </div>
      <div className={styles.child2}>
        <img src="./images/menuS.svg" alt="menu" width="100%" />
      </div>
    </div>
  );
};

export default Navbar;
