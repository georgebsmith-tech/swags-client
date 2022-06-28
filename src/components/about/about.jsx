import { Button, Typography } from "@mui/material";
import React from "react";
import style from "./about.module.css";
import RemoveIcon from "@mui/icons-material/Remove";

const About = () => {
  return (
    <div>
      hello
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        sx={{ color: "#0EE8B2", display: "flex", alignItems: "center" }}
      >
        About Us
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
        fontWeight="bold"
        variant="subtitle"
        sx={{ display: "flex", columnGap: "23px" }}
      >
        <img src="./images/check.svg" alt="" />
        Speed Delivery
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: 200,
          backgroundColor: "#000000",
          color: "whitesmoke",
          height: 63,
          borderRadius: 60,
          marginTop: "20px",
        }}
      >
        Schedule Laundry
      </Button>
      <div className={style.pic1}>
        <img src="./images/Group89.svg" alt="" id="exp" />
        <img src="./images/Group88.png" alt="" />
      </div>
    </div>
  );
};

export default About;
