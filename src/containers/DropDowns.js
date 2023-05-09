import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DropDowns({
  question,
  labelId,
  selectId,
  name,
  value,
  handleChange,
  options,
}) {
  return <Box sx={{ marginBottom: "1rem" }}>
  <h3>{question}</h3>
  <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
    <InputLabel id={labelId}>
      {question}
    </InputLabel>
    <Select
      
      labelId={labelId}
      id={selectId}
      name={name}
      value={value}
      onChange={handleChange}
    >
      {options.map((option, i) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Box>
}