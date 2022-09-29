import "./categoriesList.css";

import { useEffect, useState } from "react";
import { axiosGetCategories } from "../communicate/Comm";

export default function CategoriesList() {
  const [categories, setCategories] = useState([]);

  async function getAllCategories() {
    const cats = await axiosGetCategories("http://localhost:3000/categories");
    setCategories(cats);
  }

  useEffect(() => {
    getAllCategories();
  }, []);

  // const changeCategory = categoryName => {
  //   console.log(categoryName);
  // };

  return (
    <div className="categories-list">
      <h2>Categories</h2>
      {categories}
    </div>
  );
}
