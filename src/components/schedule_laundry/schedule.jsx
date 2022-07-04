import React from "react";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Background = styled("div")({
  background: "#1B55CA",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const Schedule = () => {
  return (
    <Background>
      <Typography
        fontFamily="Poppins"
        fontSize="27px"
        fontWeight="bold"
        variant="h4"
        mt="88px"
        mb="21px"
        color="white"
      >
        Let's Swag take
        <br /> Care of your laundry
      </Typography>
      <Button
        sx={{
          backgroundColor: "#000000",
          color: "whitesmoke",
          fontFamily: "Poppins",
          fontSize: "15px",
          textTransform: "capitalize",
          //   marginTop: "106px",
          marginBottom: "56px",
          padding: "15px 70px",
        }}
      >
        Schedule Laundry
      </Button>
    </Background>
  );
};

export default Schedule;
