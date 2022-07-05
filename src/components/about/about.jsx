import { Button, Typography } from "@mui/material";
import React from "react";
import style from "./about.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import CustomBtn from "../customBtn/customBtn";
import SectionHeader from "../section_header/section_header";

const About = () => {
  return (
    <div>
      <SectionHeader title="About Us" />
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5">
        Customer Centric <br />
        Laundry Company.
      </Typography>
      <Typography
        fontFamily="Poppins"
        fontWeight="normal"
        variant="subtitle2"
        color="#BCBCBC"
        mt="11px"
      >
        Swags laundry is a laundry enterprise that <br />
        offers both online and offline services,
        <br /> ensuring that distance is not a barrier in <br />
        getting the best when it comes to clothes
        <br />
        and fabrics management.
      </Typography>
      <Typography
        fontFamily="Poppins"
        mt="23px"
        fontWeight="bold"
        variant="subtitle"
        sx={{ display: "flex", columnGap: "23px" }}
      >
        <img src="./images/check.svg" alt="" />
        Cost Effective
      </Typography>
      <Typography
        fontFamily="Poppins"
        mt="23px"
        fontWeight="bold"
        variant="subtitle"
        sx={{ display: "flex", columnGap: "23px" }}
      >
        <img src="./images/check.svg" alt="" />
        Client's Satisfaction
      </Typography>
      <Typography
        fontFamily="Poppins"
        mt="23px"
        fontWeight="bold"
        variant="subtitle"
        sx={{ display: "flex", columnGap: "23px" }}
      >
        <img src="./images/check.svg" alt="" />
        Quality
      </Typography>
      <Typography
        fontFamily="Poppins"
        mt="23px"
        mb="36px"
        fontWeight="bold"
        variant="subtitle"
        sx={{ display: "flex", columnGap: "23px" }}
      >
        <img src="./images/check.svg" alt="" />
        Speed Delivery
      </Typography>
      <CustomBtn style={{ marginTop: "20px" }}>Schedule Laundry</CustomBtn>

      <div className={style.pic1}>
        <img src="./images/Group89.png" alt="" id="exp" width="40%" />
        <img src="./images/Group88.png" alt="" width="100%" />
      </div>
    </div>
  );
};

export default About;
