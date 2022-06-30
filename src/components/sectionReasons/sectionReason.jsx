import React from "react";
import { Typography } from "@mui/material";
import styles from "./sectionReason.module.css";

const SectionReason = ({ title, image }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.imgholder}>
        <img src="./images/check.svg" alt="" width="auto" />
      </div>
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        variant="subtitle"
        sx={{}}
      >
        {"Cost Effective" && title}
      </Typography>
    </div>
  );
};

export default SectionReason;
