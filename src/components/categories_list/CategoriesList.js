import "./categoriesList.css";

import Button from "../button/Button";

export default function CategoriesList({ categories }) {
  const changeCategory = categoryName => {
    console.log(categoryName);
  };

  const listItems = categories.map(cat => (
    <Button
      category
      key={cat}
      onClick={() => {
        changeCategory(cat);
      }}
    >
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
