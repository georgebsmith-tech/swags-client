import React from "react";
import { Button, Typography } from "@mui/material";

const SectionHeader = ({ title, color }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography
        fontFamily="Poppins"
        fontWeight="bold"
        sx={{
          color: color ? color : "#0EE8B2",
          display: "flex",
          alignItems: "center",
        }}
      >
        {title}
      </Typography>
      <div
        style={{
          backgroundColor: color ? color : "#0EE8B2",
          width: "31.5px",
          height: "3px",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
};

export default SectionHeader;
