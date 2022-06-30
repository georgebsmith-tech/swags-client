import React from "react";
import { Typography } from "@mui/material";
import SectionHeader from "../section_header/section_header";
import styles from "./testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.parent}>
      <SectionHeader title="Testimonials" />
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5">
        What Our Customers <br /> Are Saying!
      </Typography>
      <div className={styles.imgholder}>
        <img src="./images/Group 90.png" alt="" />
        <div className={styles.textholder}>
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="h6"
            fontSize={21}
            color="#30EBBC"
          >
            Anna Doe
          </Typography>
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            fontSize={12}
          >
            CEO DEAN LTD
          </Typography>
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            fontSize={11}
            color="#BCBCBC"
          >
            Lorem ipsum dolor sit amet, consectetur adipi eius mod tempor
            incididunt ut la et dolore magna aliqua. Ut enim ad Lorem ipsum
            dolor sit amet, consectetur adipi elit, sed do eiusmod tempor
            incididunt ut la et
          </Typography>
          <div className={styles.starsholder}>
            <img src="./images/stars.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
