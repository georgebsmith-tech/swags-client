import { Button, Typography } from "@mui/material";
import React from "react";
import styles from "./hero.module.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

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
        <Button
          variant="contained"
          sx={{
            width: 200,
            backgroundColor: "#000000",
            color: "whitesmoke",
            height: 63,
            borderRadius: 60,
          }}
        >
          Quick Laundry
        </Button>
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
          <img src="./images/play-btn.svg" alt="" />
        </Button>
      </div>
      <div>
        <img src="./images/Group87.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
