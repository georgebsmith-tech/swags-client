import { Typography } from "@mui/material";
import React from "react";
import Card from "../card/card";
import SectionHeader from "../section_header/section_header";
import styles from "./howWork.module.css";

const HowWork = () => {
  return (
    <div className={styles.parent}>
      <SectionHeader title="How we work" />
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5" mb="79px">
        Why Choose Swag
      </Typography>
      <Card title="Book Laundry" image="/images/delivery.png" />
      <Card title="We Pick Up" image="/images/pickup.png" />
      <Card title="We Deliver" image="" />
    </div>
  );
};

export default HowWork;
