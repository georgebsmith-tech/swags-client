import React from "react";
import SectionHeader from "../section_header/section_header";
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
import styles from "./contactUs.module.css";
import styled from "@emotion/styled";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const ContactUs = () => {
  return (
    <div className={styles.parent}>
      <SectionHeader title="Contact Us" />
      <Typography
        fontFamily="Poppins"
        fontSize="27px"
        fontWeight="bold"
        variant="h5"
        mt="5px"
      >
        Get Your Clothing's <br />
        Cleaned, it's Simple
        <br /> & Affordable
      </Typography>
      <form className={styles.forms} action="#">
        <FormLabel
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
            fontSize: "14px",
            marginBottom: "38px",
          }}
        >
          Book a Quick Laundry
        </FormLabel>
        <FormGroup>
          <FormGroup row>
            <FormControl
              sx={{
                margin: "auto",
                width: "48%",
              }}
            >
              <TextField
                id="demo-helper-text-misaligned-no-helper"
                label="Your Name"
                size="small"
                margin="normal"
              />
            </FormControl>
            <FormControl
              sx={{
                margin: "auto",
                width: "48%",
              }}
            >
              <TextField
                id="demo-helper-text-misaligned-no-helper"
                label="Phone Number"
                type="number"
                size="small"
                margin="normal"
              />
            </FormControl>
          </FormGroup>
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
    </div>
  );
};

export default ContactUs;
