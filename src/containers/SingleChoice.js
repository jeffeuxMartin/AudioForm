import React from "react";
// import { useState } from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export default function SingleChoice({
  question,
  options,
  name,
  otherName,
  value,
  otherValue,
  handleChange,
  // handleOtherChange,
  hasOtherOption = null,
}) {
  // const [value, setValue] = useState("");
  // const [otherValue, setOtherValue] = useState("");

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <h3>{question}</h3>
      <RadioGroup
          value={value}
          onChange={handleChange}
          name={name}
        >

          {
            options.map((option, index) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))
            
          }
          {
            (hasOtherOption !== null) && (
              <FormControlLabel
                key={hasOtherOption}
                value={hasOtherOption}
                control={<Radio />}
                label={hasOtherOption}
              />
            )
          }
          {((hasOtherOption !== null)
          &&
            (value === hasOtherOption)) && (
            <TextField
              id={otherName}
              name={otherName}
              label={otherName}
              value={otherValue}
              onChange={handleChange}
              helperText="Enter your other"
            />
          )}
        </RadioGroup>
    </Box>
  );
}
