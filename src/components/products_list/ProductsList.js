import "./productsList.css";

import Button from "../button/Button";
import Product from "../product/Product";

import { useEffect, useState } from "react";

export default function ProductsList() {
  const axios = require("axios");
  const [items, getItems] = useState([]);
  const [itemsAmount, getItemsAmount] = useState(5);
  async function getNewItems() {
    const { data } = await axios.get("http://localhost:3000/items", {
      params: {
        _limit: itemsAmount,
      },
    });

    const newItems = data.map(item => {
      return (
        <Product
          name={item.name}
          description={item.description}
          price={item.price}
          key={item.name}
          imagePath={item.img}
        />
      );
    });

    getItems(newItems);
  }
  useEffect(() => {
    getNewItems();
  }, [itemsAmount]);

  return (
    <div>
      <div className="products-list">{items}</div>
      <Button load onClick={() => getItemsAmount(itemsAmount + 5)}>
        Load more
      </Button>
    </div>
  );
}
