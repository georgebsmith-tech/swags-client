import React from "react";
import SectionHeader from "../section_header/section_header";
import { Typography } from "@mui/material";

const ContactUs = () => {
  return (
    <div>
      <SectionHeader title="Contact Us" />
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5">
        Get Your Clothing's <br />
        Cleaned, it's Simple
        <br /> & Affordable
      </Typography>
    </div>
  );
};

export default ContactUs;
