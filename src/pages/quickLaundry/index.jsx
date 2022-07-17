import React from "react";
import Container from "../../components/container";
import Sidebar from "../../components/navbar/sidebar";
import NavbarDashboard from "../../components/navbar_dashboard/navbarDashboard";
import styles from "./quickLaundry.module.css";
import Button from "@mui/material/Button";
import { Tab, Box, ButtonGroup } from "@mui/material";
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
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import LaundryItem from "../../components/laundryItem/laundryItem";
import LaundrySubmit from "../../components/laundrySubmit/laundrySubmit";

const QuickLaundry = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const options = [
    {
      value: "Home",
      label: "Home",
    },
    {
      value: "Office",
      label: "Office",
    },
    {
      value: "Church",
      label: "Church",
    },
    {
      value: "School",
      label: "School",
    },
  ];

  const [currency, setCurrency] = useState("EUR");

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
  };

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

  // for laundry items
  const [items, setItems] = useState([<LaundryItem />]);

  const handleIncrement = () => {
    setItems((items) => [...items, <LaundryItem />]);
  };

  const handleDecrement = (id) => {
    console.log(id);
    setItems((items) =>
      items.filter((item) => {
        // console.log("item:", item);
        // console.log("item index:", items.indexOf(item));
        return items.indexOf(item) !== id;
      })
    );
    // console.log("idx:", id);
  };

  // for confirmed order show
  const [isopen, setIsopen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setIsopen(!isopen);
    // console.log("clicked, isopen:", isopen);
    // alert(`isopen: ${isopen}`);
  };

  return (
    <div className={styles.parent}>
      <Container style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <NavbarDashboard />
      </Container>
      <Sidebar />
      <LaundrySubmit isopen={isopen} setIsopen={setIsopen} />
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
            <TabPanel value="1" sx={{ padding: "0px" }}>
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
                      // id="demo-helper-text-misaligned-no-helper"
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
                      {options.map((option, idx) => (
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
            <TabPanel value="2" sx={{ padding: "0px" }}>
              <form action="#">
                <FormControl fullWidth>
                  <TextField
                    label="Enter Laundry Title"
                    size="small"
                    margin="normal"
                  />
                </FormControl>
                {/* insert laundry item */}
                {/* <LaundryItem /> */}
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx} className={styles.li}>
                      {item}
                      <Button
                        onClick={(e) => handleDecrement(e)}
                        variant="contained"
                        sx={{
                          position: "absolute",
                          top: "6px",
                          left: "-6px",
                          backgroundColor: "#707070",
                          color: "whitesmoke",
                          fontFamily: "Poppins",
                          fontSize: "12px",
                          textTransform: "capitalize",
                          // lineHeight: "23px",
                          letterSpacing: "0px",
                          width: "20px",
                          minWidth: "10px",
                          height: "20px",
                          borderRadius: "50%",
                          padding: "0px",
                        }}
                      >
                        x
                      </Button>
                    </li>
                  ))}
                </ul>
                <FormControl className={styles.buttons}>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={handleOpen}
                    // mb="106px"
                    sx={{
                      backgroundColor: "#000000",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      textTransform: "capitalize",
                      // marginTop: "120px",
                      // marginBottom: "56px",
                      padding: "10px 69px",
                      lineHeight: "23px",
                      letterSpacing: "0px",
                      // fontWeight: "light",
                    }}
                  >
                    Book Laundry
                  </Button>
                  <Button
                    onClick={handleIncrement}
                    variant="contained"
                    sx={{
                      backgroundColor: "#000000",
                      color: "whitesmoke",
                      fontFamily: "Poppins",
                      fontSize: "40px",
                      textTransform: "capitalize",
                      lineHeight: "23px",
                      letterSpacing: "0px",
                      width: "54px",
                      height: "54px",
                      borderRadius: "50%",
                    }}
                  >
                    +
                  </Button>
                </FormControl>
              </form>
            </TabPanel>
          </TabContext>
        </div>
      </Container>
    </div>
  );
};

export default QuickLaundry;
