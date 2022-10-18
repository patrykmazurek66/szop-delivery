import "./categoriesList.css";

import { useEffect, useState } from "react";
import { axiosGetCategories } from "../../communicate/Comm";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function CategoriesList({ handler }) {
  const [categories, setCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  async function getAllCategories() {
    const cats = await axiosGetCategories();
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
      <p className="categories-list-header">Categories</p>
      <ToggleButtonGroup value={activeCategories} orientation="vertical" onChange={handleChange}>
        {categories.map(cat => (
          <ToggleButton variant="text" key={cat} value={cat} color="primary" size="large">
            {cat}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
