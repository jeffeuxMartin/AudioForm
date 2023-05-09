import React, { useState } from "react";
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
  onChange,
  hasOtherOption = false,
}) {
  const [otherValue, setOtherValue] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue === "__other__" ? otherValue : selectedValue);
  };

  const handleOtherChange = (event) => {
    setOtherValue(event.target.value);
    onChange(event.target.value);
  };

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
        {hasOtherOption && (
          <FormControlLabel
            value="__other__"
            control={<Radio />}
            label={
              <TextField
                id={`other-${question}`}
                label="其他"
                value={otherValue}
                onChange={handleOtherChange}
              />
            }
          />
        )}
      </RadioGroup>
    </Box>
  );
}
