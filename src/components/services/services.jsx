import { Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../section_header/section_header";
import ServiceChoice from "../service_choice/service_choice";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div>
      <SectionHeader title="Our Services" />

      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5" mt="6px">
        Explore Our Services
      </Typography>
      <div className={styles.grid}>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Instant Laundry"
        ></ServiceChoice>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Cloth Renewal"
        ></ServiceChoice>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Schedule Laundry"
        ></ServiceChoice>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Instant Pickup"
        ></ServiceChoice>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Ironing"
        ></ServiceChoice>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Stain Removal"
        ></ServiceChoice>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Quick Delivery"
        ></ServiceChoice>
        <ServiceChoice
          image="./images/delivery2.svg"
          title="Customer Support"
        ></ServiceChoice>
      </div>
    </div>
  );
};

export default Services;
