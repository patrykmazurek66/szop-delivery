import "./productsList.css";

import Button from "../button/Button";
import Product from "../product/Product";

import { useEffect, useState } from "react";

export default function ProductContainer() {
  const axios = require("axios");
  const [items, getItems] = useState([]);
  async function getNewItems() {
    const { data } = await axios.get("http://localhost:3000/items");

    const newItems = data.map(item => {
      return (
        <Product
          name={item.name}
          description={item.description}
          price={item.price}
          key={item.name}
          imagePath={item.path}
        />
      );
    });

    getItems(newItems);
  }
  useEffect(() => {
    getNewItems();
  }, [items]);

  return (
    <div>
      <div className="products-list">{items}</div>
      <Button load>Load more</Button>
    </div>
  );
}
