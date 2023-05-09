import React from "react";
// import { useState } from "react";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

export default function NormalText({
  q,
  value,
  handleChange,
}) {
  // const [value, setValue] = useState("");
  // const [otherValue, setOtherValue] = useState("");

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <h3>{q}</h3>
      <TextField
            key={q}
            id={q}
            name={q}
            label={q}
            value={value}
            onChange={handleChange}
            helperText={`Enter your ${q}`}
          />
          
    </Box>
  );
}
