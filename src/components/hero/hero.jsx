import { Button, Typography } from "@mui/material";
import { style } from "@mui/system";
import React from "react";
import CustomBtn from "../customBtn/customBtn";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div>
      <Typography
        color="#F8F8F8"
        fontFamily="Poppins"
        variant="h4"
        fontSize={36}
        align="center"
        className={styles.header}
      >
        Reliable Laundry <br />
        And Dry Cleaning
        <br />
        Services
      </Typography>
      <Typography
        color="#E3E3E3"
        fontFamily="Poppins"
        variant="subtitle2"
        align="center"
      >
        It's all about giving you you r free time to <br />
        look good and look smart because we've
        <br />
        got you covered
      </Typography>
      <div className={styles.btngroup}>
        <CustomBtn></CustomBtn>
        <Button
          color="primary"
          sx={{
            marginLeft: "28px",
            outline: "4px black solid",
            width: 60,
            height: 60,
            borderRadius: "50%",
          }}
        >
          <img src="./images/play-btn.svg" alt="landing page" />
        </Button>
      </div>
      <div>
        <img src="./images/Group87.png" alt="" width="100%" />
      </div>
    </div>
  );
};

export default Hero;
