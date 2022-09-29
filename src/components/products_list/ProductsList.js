import "./productsList.css";

import Button from "../button/Button";
import Product from "../product/Product";

import { useEffect, useState } from "react";
export default function ProductsList() {
  const axios = require("axios");
  const [allItemsNumber, setAllItemsNumber] = useState(5);
  const [items, setItems] = useState([]);
  const [Allitems, setAllItems] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(5);

  async function getAllItems() {
    const { data } = await axios.get("http://localhost:3000/items");
    setAllItemsNumber(data.length);

    const itemsArr = data.map(item => {
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

    setAllItems(itemsArr);
  }

  useEffect(() => {
    getAllItems();
  }, []);
  useEffect(() => {
    setItems(Allitems.filter((item, index) => index < itemsAmount));
  }, [itemsAmount, items]);

  return (
    <div>
      <div className="products-list">{items}</div>
      {allItemsNumber > itemsAmount && (
        <Button load onClick={() => setItemsAmount(itemsAmount + 5)}>
          Load more
        </Button>
      )}
    </div>
  );
}
