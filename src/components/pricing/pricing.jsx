import React from "react";
import SectionHeader from "../section_header/section_header";
import { Typography } from "@mui/material";
import styles from "./pricing.module.css";
const Pricing = () => {
  return (
    <div className={styles.parent}>
      <SectionHeader title="Pricing" />
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5" mb="79px">
        Choose Our <br />
        Simple Pricing
      </Typography>
    </div>
  );
};

export default Pricing;
