import "./searchbar.css";
import { useEffect, useState } from "react";

import TextInput from "../text_input/TextInput";
import { MenuItem, Select } from "@mui/material";

export default function Searchbar({ handler }) {
  const [sort, setSort] = useState("name-asc");

  const handleChange = e => {
    setSort(e.target.value);
  };

  useEffect(() => {
    handler(sort);
  }, [sort]);

  return (
    <div className="searchbar-container">
      <Select value={sort} defaultValue={"name-asc"} label="sort" onChange={handleChange}>
        <MenuItem value="name-asc">Name Ascending</MenuItem>
        <MenuItem value="name-dsc">Name Descending</MenuItem>
        <MenuItem value="price-asc">Price Ascending</MenuItem>
        <MenuItem value="price-dsc">Price Descending</MenuItem>
      </Select>
      <TextInput />
    </div>
  );
}
