import React from "react";
import { Typography } from "@mui/material";
import styles from "./index.module.css";
import { useState } from "react";
import Sidebar from "./sidebar";
import { useContext } from "react";
import { SideNavContext, ToggleContext } from "./useSideToggle";

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);
  // const toggleSidebar = () => {
  //   setToggle(!toggle);
  // };
  const isNav = useContext(SideNavContext);
  const toggleNav = useContext(ToggleContext);
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

        <Sidebar />
      </div>

      <div className={styles.child2}>
        <button
          onClick={() => toggleNav(!isNav)}
          style={{ background: "transparent", border: "none" }}
        >
          <img src="./images/menuS.svg" alt="menu" width="100%" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
