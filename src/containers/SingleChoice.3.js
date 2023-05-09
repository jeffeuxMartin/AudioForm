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
  value,
  otherValue,
  handleChange,
  handleOtherChange,
  hasOtherOption = false,
}) {
  // const [value, setValue] = useState("");
  // const [otherValue, setOtherValue] = useState("");

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <h3>{question}</h3>
      <RadioGroup value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <FormControlLabel
          
          key={option}
          value={option}
          control={<Radio />}
          label={option}
        />
      ))}
      {
        hasOtherOption && (
        <FormControlLabel
          value="__other__"
          control={<Radio />}
          label="其他"
        />
        )
      }
      </RadioGroup>
      {value === "__other__" && (
        <TextField
          fullWidth
          label="其他"
          value={otherValue}
          onChange={handleOtherChange}
        />
      )}
    </Box>
  );
}
