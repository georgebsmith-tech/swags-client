import React from "react";
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
import { ButtonGroup } from "@mui/material";

import Button from "@mui/material/Button";
import { useState } from "react";

export default function LaundryItem({ add }) {
  const [val, setval] = useState("home");
  const [counter, setCounter] = useState(0);


  const options2 = [
    {
      value: "pick service",
      label: "Pick Service",
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

  const handleChangeSelect = (event) => {
    setval(event.target.value);
  };
  return (
    <FormGroup>
      <FormControl>
        <TextField label="Your Item" size="small" margin="normal" />
      </FormControl>
      <FormGroup row>
        <FormControl sx={{ width: "55%" }}>
          <TextField
            size="small"
            // margin="normal"
            // id="outlined-select-val-native"
            select
            // label="Home"
            value={val}
            onChange={handleChangeSelect}
            SelectProps={{
              native: true,
            }}
          >
            {options2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </FormControl>
        <FormControl sx={{ width: "40%", marginLeft: "5%" }}>
          <ButtonGroup sx={{ width: "100%" }}>
            <Button
              sx={{ width: "33%", padding: "5px 0px" }}
              onClick={() => setCounter(counter + 1)}
            >
              +
            </Button>
            <TextField
              disabled
              size="small"
              value={counter}
              // width="5px"
              sx={{ width: "33%", padding: "0px" }}
              // margin="normal"
            />

            <Button
              sx={{ width: "33%" }}
              onClick={() => {
                counter > 0 ? setCounter(counter - 1) : 0;
              }}
            >
              -
            </Button>
          </ButtonGroup>
        </FormControl>
      </FormGroup>
    </FormGroup>
  );
}
