import React from "react";
import { Typography } from "@mui/material";
import SectionHeader from "../section_header/section_header";
import styles from "./index.module.css";
import CustomBtn from "../customBtn/customBtn";
import Container from "../container";

export const PricingCard = ({ title, subtitle, content, image }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.imageHolder}>
        <img src={image || "./images/silver.svg"} alt="icon" />
      </div>
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        variant="h6"
        mb="14px"
        mt="30px"
      >
        {title || "$60/Month"}
      </Typography>
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        variant="h6"
        mb="14px"
        sx={{ color: "#6FF1D0", fontSize: "24px" }}
      >
        {subtitle || "Silver Package"}
      </Typography>
      <div
        style={{ background: "#7070703B", height: "1.5px", width: "100%" }}
      />
      <div className={styles.contents}>
        {content.map((item, id) => (
          <Typography
            key={id}
            fontFamily="Poppins"
            mt="23px"
            fontWeight="bold"
            variant="subtitle"
            sx={{ display: "flex", columnGap: "23px" }}
          >
            <img src="./images/check-1.svg" alt="icon" />
            {item}
          </Typography>
        ))}
      </div>
      <CustomBtn
        style={{
          backgroundColor: "white",
          color: "black",
          //   padding: "15px 64px",
          marginTop: "52px",
          marginBottom: "66px",
        }}
      >
        {" "}
        Pick Plan{" "}
      </CustomBtn>
    </div>
  );
};
