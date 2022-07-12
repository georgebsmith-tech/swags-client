import React from "react";
import Container from "../../components/container";
import Sidebar from "../../components/navbar/sidebar";
import NavbarDashboard from "../../components/navbar_dashboard/navbarDashboard";
import styles from "./quickLaundry.module.css";
import { Tab, Box } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  FormGroup,
  FormLabel,
  Typography,
  InputLabel,
  OutlinedInput,
  Input,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";

const QuickLaundry = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const currencies = [
    {
      value: "USD",
      label: "Home",
    },
    {
      value: "EUR",
      label: "Office",
    },
    {
      value: "BTC",
      label: "Church",
    },
    {
      value: "JPY",
      label: "School",
    },
  ];

  const customStyle = {
    // color: "black",
    // backgroundColor: "transparent",
    fontWeight: "bold",
    padding: "0px",
    lineHeight: "25px",
    letterSpacing: "0px",
    textTransform: "capitalize",
    "&:focus": { color: "#1B55CA", fontSize: "16px", fontWeight: "bold" },
  };

  const [currency, setCurrency] = useState("EUR");

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className={styles.parent}>
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <NavbarDashboard />
      </Container>
      <Sidebar />
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <div className={styles.tabs}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                variant="fullWidth"
                visibleScrollbar={true}
                sx={{ padding: "0", margin: "0" }}
              >
                <Tab label="Personal Details" value="1" sx={customStyle} />
                <Tab label="Laundry Items" value="2" sx={customStyle} />
              </TabList>
            </Box>

            <TabPanel value="1">
              <form className={styles.forms} action="#">
                <FormGroup>
                  {/* <FormGroup row> */}
                  <FormControl>
                    <TextField
                      id="demo-helper-text-misaligned-no-helper"
                      label="Your Name"
                      size="small"
                      margin="normal"
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      id="demo-helper-text-misaligned-no-helper"
                      label="Phone Number"
                      type="number"
                      size="small"
                      margin="normal"
                    />
                  </FormControl>
                  {/* </FormGroup> */}
                  <FormControl
                    sx={{
                      margin: "auto",
                      width: "100%",
                    }}
                  >
                    <TextField
                      id="demo-helper-text-misaligned-no-helper"
                      label="Enter Your Pickup Address"
                      //   fullWidth
                      size="small"
                      margin="normal"
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      size="small"
                      margin="normal"
                      // id="outlined-select-currency-native"
                      select
                      // label="Home"
                      value={currency}
                      onChange={handleChangeSelect}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </FormControl>
                  <FormControl>
                    <FormControlLabel
                      value="Save Address to Profile"
                      control={<Radio />}
                      label="Save Address to Profile"
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      margin: "auto",
                      width: "100%",
                    }}
                  >
                    <TextField
                      id="demo-helper-text-misaligned-no-helper"
                      label="Add Address Title"
                      //   fullWidth
                      size="small"
                      margin="normal"
                    />
                  </FormControl>
                  <FormControl>
                    <Button
                      type="submit"
                      variant="contained"
                      mb="106px"
                      sx={{
                        backgroundColor: "#000000",
                        color: "whitesmoke",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                        textTransform: "capitalize",
                        marginTop: "106px",
                        marginBottom: "56px",
                      }}
                    >
                      Proceed
                    </Button>
                  </FormControl>

                  {/* <CssTextField label="Custom CSS" id="custom-css-outlined-input" /> */}
                </FormGroup>
              </form>
            </TabPanel>
            <TabPanel value="2">
              <p>hello 2</p>
            </TabPanel>
          </TabContext>
        </div>
      </Container>
    </div>
  );
};

export default QuickLaundry;
