import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function DropDowns({
  dropdownQuestions,
  dropdownOptions,
  values,
  handleChange,
}) {
  return dropdownQuestions.map((q, index) => (
    <Box key={index} sx={{ marginBottom: "1rem" }}>
      <h3>{q}</h3>
      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
        <InputLabel id={`dropdown-question-${index}-label`}>{q}</InputLabel>
        <Select
          labelId={`dropdown-question-${index}-label`}
          id={`dropdown-question-${index}`}
          name={`selectedOption[${index}]`}
          value={values.selectedOption[index]}
          onChange={handleChange}
        >
          {dropdownOptions[index].map((option, i) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  ));
}
