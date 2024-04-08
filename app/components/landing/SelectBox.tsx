"use client";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const SelectBox = ({ initialState }: { initialState: string }) => {
  const [category, setCategory] = useState(initialState);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ width: 200 }}>
      <InputLabel id="selectbox">Category</InputLabel>
      <Select
        labelId="selectbox"
        value={category}
        onChange={handleChange}
        label="Category"
      >
        <MenuItem value="recent">Most Recent</MenuItem>
        <MenuItem value="close">Almost There</MenuItem>
        <MenuItem value="boost">Needs a Boost</MenuItem>
        <MenuItem value="charities">Charities</MenuItem>
        <MenuItem value="theme">Religiously Themed</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectBox;
