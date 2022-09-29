import "./productsList.css";
import "../communicate/Comm";

import Button from "../button/Button";

import { useEffect, useState } from "react";
import axiosGetItems from "../communicate/Comm";
export default function ProductsList() {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(5);
  const [maxItemsAmount, setMaxItemsAmount] = useState(0);

  async function getAllItems() {
    const itemsArr = await axiosGetItems("http://localhost:3000/items");
    setMaxItemsAmount(itemsArr.length);
    setAllItems(itemsArr);
    setItems(itemsArr.slice(0, 5));
  }

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    setItems(allItems.slice(0, itemsAmount));
  }, [itemsAmount, allItems]);

  return (
    <div>
      <div className="products-list">{items}</div>
      {maxItemsAmount > itemsAmount && (
        <Button
          load
          onClick={() => {
            setItemsAmount(itemsAmount + 5);
          }}
        >
          Load more
        </Button>
      )}
    </div>
  );
}
