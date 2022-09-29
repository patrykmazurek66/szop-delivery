import "./productsList.css";

import Button from "../button/Button";
import Product from "../product/Product";

import { useEffect, useState } from "react";
export default function ProductsList() {
  const axios = require("axios");
  const [allItems, setAllItems] = useState(0);
  const [items, setItems] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(5);

  async function countAllItems() {
    const { data } = await axios.get("http://localhost:3000/items");
    setAllItems(data.length);
  }
  async function getNewItems() {
    countAllItems();
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

    setItems(newItems);
  }
  useEffect(() => {
    getNewItems();
  }, [itemsAmount]);

  return (
    <div>
      <div className="products-list">{items}</div>
      {allItems > itemsAmount && (
        <Button load onClick={() => setItemsAmount(itemsAmount + 5)}>
          Load more
        </Button>
      )}
    </div>
  );
}
