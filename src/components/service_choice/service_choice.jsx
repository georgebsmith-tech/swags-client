import React from "react";
import style from "./service_choice.module.css";
import { Button, Typography } from "@mui/material";

const ServiceChoice = ({ image, title }) => {
  return (
    <Button className={style.choiceParent} variant="outlined">
      <img src={image} alt="service choice" />
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        variant="subtitle2"
        color="#535353"
        mt="10px"
        mb="35px"
        fontSize="12px"
      >
        {title}
      </Typography>
    </Button>
  );
};

export default ServiceChoice;
