import React from "react";
import { Slider, Typography } from "@mui/material";

export default function SliderInput({ name, label, min, max, value, handleChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Typography id="slider-label" gutterBottom>
        {label}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="slider-label"
        name={name}
        min={min}
        max={max}
      />
      <Typography variant="caption">{`${min}`}</Typography>
      <Typography variant="caption" style={{ float: "right" }}>{`${max}`}</Typography>
    </div>
  );
}
