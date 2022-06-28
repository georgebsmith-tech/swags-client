import { Typography } from "@mui/material";
import React from "react";
import ServiceChoice from "../service_choice/service_choice";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div>
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        sx={{ color: "#0EE8B2", display: "flex", alignItems: "center" }}
      >
        Our Services
        <div
          style={{
            backgroundColor: "#0EE8B2",
            width: "31.5px",
            height: "3px",
            marginLeft: "10px",
          }}
        ></div>
      </Typography>
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5">
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
