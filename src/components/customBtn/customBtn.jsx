import React from "react";
import { Button } from "@mui/material";
const CustomBtn = ({ style, children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        // width: 200,
        backgroundColor: "#000000",
        color: "whitesmoke",
        fontFamily: "Poppins",
        fontSize: "16px",
        textTransform: "capitalize",
        // height: 63,
        borderRadius: 60,
        padding: "18px 42px",
        ...style,
      }}
      // fontSize={14}
    >
      {children || "Quick Laundry"}
    </Button>
  );
};

export default CustomBtn;
