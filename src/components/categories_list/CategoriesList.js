import "./categoriesList.css";

import Button from "../button/Button";

export default function CategoriesList({ categories }) {
  const listItems = categories.map((cat, index) => (
    <Button category key={index}>
      {cat}
    </Button>
  ));
  return (
    <div className="categories-list">
      <h2>Categories</h2>
      {listItems}
    </div>
  );
}
