import React from "react";
import { useContext } from "react";
import styles from "./navbarDashboard.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "@mui/material";
import { SideNavContext } from "../navbar/useSideToggle";

const NavbarDashboard = ({ name }) => {
  const { show, setShow } = useContext(SideNavContext);
  return (
    <div className={styles.parent}>
      <button
        onClick={() => setShow(!show)}
        style={{ border: "none", background: "transparent", cursor: "pointer" }}
        className={styles.child1}
      >
        <img src="/images/menuSb.svg" alt="menu" width="100%" />
      </button>
      <div className={styles.child2}>
        <NotificationsIcon />
        <div className={styles.about}>
          <AccountCircleIcon />
          <Typography
            fontFamily="Poppins"
            fontWeight="normal"
            variant="subtitle2"
            color="black"
            sx={{
              lineHeight: "23px",
              fontSize: "15px",
            }}
          >
            {name || "Precious"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
