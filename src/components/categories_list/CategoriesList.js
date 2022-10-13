import "./categoriesList.css";

import { useEffect, useState } from "react";
import { axiosGetCategories } from "../communicate/Comm";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function CategoriesList({ handler }) {
  const [categories, setCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  async function getAllCategories() {
    const cats = await axiosGetCategories("http://localhost:3000/categories");
    setCategories(cats);
  }

  const handleChange = (e, newCategories) => {
    setActiveCategories(newCategories);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    handler(activeCategories);
    localStorage.setItem("activeCategories", JSON.stringify(activeCategories));
  }, [activeCategories]);

  return (
    <div className="categories-list">
      <h2 className="categories-list-header">Categories</h2>
      <ToggleButtonGroup value={activeCategories} orientation="vertical" onChange={handleChange}>
        {categories.map(cat => (
          <ToggleButton key={cat} value={cat} color="primary" size="large">
            {cat}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
