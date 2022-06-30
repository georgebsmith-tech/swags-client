import React from "react";
import { Typography } from "@mui/material";
import SectionHeader from "../section_header/section_header";
import SectionReason from "../sectionReasons/sectionReason";
import styles from "./whyus.module.css";
import CustomBtn from "../customBtn/customBtn";

const WhyUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.parentWhy}>
        <SectionHeader title="Why Us" />
        <Typography fontFamily="Poppins" fontWeight="bold" variant="h5">
          Why choose Swag
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontWeight="normal"
          variant="subtitle2"
          color="#BCBCBC"
          mt="11px"
          mb="24"
        >
          Because we give the best when it <br />
          comes to laundry services, ensuring
          <br /> that our client's satisfaction and good
          <br /> looks are our priority.
        </Typography>
        <SectionReason title="We Deliver" />
        <SectionReason title="We Care" />
        <SectionReason title="We Are Experts" />
        <CustomBtn style={{ marginTop: "56px" }}>Schedule Laundry</CustomBtn>
      </div>
      <img src="./images/Group87.png" alt="" width="100%" />
    </div>
  );
};

export default WhyUs;
