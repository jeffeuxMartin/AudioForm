import React from "react";
// import { useState } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  // FormControlLabel,
  // Radio,
  // RadioGroup,
  TextField,
} from "@mui/material";

export default function AudioText({ q, value, source, handleChange }) {
  // const [value, setValue] = useState("");
  // const [otherValue, setOtherValue] = useState("");

  return (
    <Box sx={{ marginBottom: "1rem" }}>
      <h3>{q}</h3>
      <Box sx={{ position: "relative", paddingBottom: "75px" }}>
        <ReactPlayer
          url={source}
          height="75px"
          width="50%"
          controls
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            marginBottom: "10px",
            paddingBottom: "10px",
          }}
        />
      </Box>
      <TextField
        key={q}
        id={q}
        name={q}
        label={q}
        value={value}
        onChange={handleChange}
        helperText={`Enter your ${q}`}
        style={{ width: "50%" }}
      />
    </Box>
  );
}
