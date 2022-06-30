import { Typography } from "@mui/material";
import React from "react";
import styles from "./card.module.css";

const Card = ({ title, image }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.centerImage}>
        <img src={image || "./images/pickup.svg"} alt="" />
      </div>
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5" mt="13px">
        {title || "Book Laundry"}
      </Typography>
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        variant="subtitle2"
        fontSize={15}
        color="#535353"
        mt="17px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Typography>
    </div>
  );
};

export default Card;
