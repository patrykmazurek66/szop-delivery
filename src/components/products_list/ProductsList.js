import "./productsList.css";
import { axiosGetItems } from "../communicate/Comm";

import Button from "../button/Button";

import { useEffect, useState } from "react";
export default function ProductsList() {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(6);
  const [maxItemsAmount, setMaxItemsAmount] = useState(0);

  async function getAllItems() {
    const itemsArr = await axiosGetItems("http://localhost:3000/items");
    setMaxItemsAmount(itemsArr.length);
    setAllItems(itemsArr);
    setItems(itemsArr.slice(0, 6));
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
            setItemsAmount(itemsAmount + 6);
          }}
        >
          Load more
        </Button>
      )}
    </div>
  );
}
