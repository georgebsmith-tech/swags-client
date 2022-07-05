import React from "react";
import { Typography } from "@mui/material";
import styles from "./footer.module.css";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className={styles.parent}>
      <Typography
        fontFamily="Poppins"
        //   mt="15px"
        fontWeight="normal"
        variant="subtitle2"
        sx={{
          display: "flex",
          columnGap: "6.6px",
          fontSize: "15px",
          color: "white",
        }}
      >
        <CopyrightIcon />
        SwagLaundry 2022
      </Typography>
    </div>
  );
};

export default Footer;
