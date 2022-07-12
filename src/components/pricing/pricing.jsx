import React from "react";
import SectionHeader from "../section_header/section_header";
import { Typography, Tab, Box } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useState } from "react";
import styles from "./pricing.module.css";
import { PricingCard } from "../pricing_card";

const Pricing = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const customStyle = {
    // color: "red",
    fontSize: "13px",
    fontWeight: "bold",
    // backgroundColor: "transparent",
    // padding: "0px",
    textTransform: "capitalize",
    "&:focus": {
      backgroundColor: "#0FD7B5",
      color: "white",
    },
  };

  return (
    <div className={styles.parent}>
      <SectionHeader title="Pricing" />
      <Typography fontFamily="Poppins" fontWeight="bold" variant="h5" mb="79px">
        Choose Our <br />
        Simple Pricing
      </Typography>
      <div className={styles.tabs}>
        <TabContext value={value}>
          <Box sx={{ border: 1, borderColor: "#0FD7B5", width: "100%" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="fullWidth"
              visibleScrollbar={true}
              sx={{ padding: "0", margin: "0", ...customStyle }}
            >
              <Tab label="Weekly" value="1" sx={customStyle} />
              <Tab label="Monthly" value="2" sx={customStyle} />
              <Tab label="Yearly" value="3" sx={customStyle} />
            </TabList>
          </Box>

          <TabPanel value="1">
            <PricingCard
              title="$30/Week"
              subtitle="Silver Package"
              content={[
                "Dry Cleaning",
                "Shirts Services",
                "Bedding",
                "Iron and Fold",
              ]}
            />
          </TabPanel>
          <TabPanel value="2">
            <PricingCard
              title="$60/Month"
              image="/images/diamond.svg"
              subtitle="Diamond Package"
              content={[
                "Dry Cleaning",
                "Shirts Services",
                "Bedding",
                "Iron and Fold",
              ]}
            />
          </TabPanel>
          <TabPanel value="3">
            <PricingCard
              title="$120/Year"
              image="/images/gold.svg"
              subtitle="Gold Package"
              content={[
                "Dry Cleaning",
                "Shirts Services",
                "Bedding",
                "Iron and Fold",
              ]}
            />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Pricing;
