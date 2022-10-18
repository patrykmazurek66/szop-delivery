import "./productsList.css";
import { axiosGetItems } from "../../communicate/Comm";
import sortItems from "./sortBy";

import { Button } from "@mui/material";
import Product from "./product/Product";

import { useEffect, useState } from "react";
export default function ProductsList({ categories, sortType }) {
  const itemsPerPage = 6;

  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(itemsPerPage);
  const [maxItemsAmount, setMaxItemsAmount] = useState(0);

  async function getAllItems() {
    let itemsArr = await axiosGetItems();
    itemsArr = sortItems(itemsArr, sortType);
    setMaxItemsAmount(itemsArr.length);
    setAllItems(itemsArr);
    setItems(itemsArr.slice(0, itemsPerPage));
    setFilteredItems(itemsArr);
  }

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      const itemsArr = sortItems(allItems, sortType);
      setFilteredItems(sortItems(itemsArr, sortType));
    } else {
      const itemsArr = allItems.filter(item => {
        return categories.includes(item.category);
      });
      setFilteredItems(sortItems(itemsArr, sortType));
    }
  }, [categories, sortType]);

  useEffect(() => {
    setMaxItemsAmount(filteredItems.length);
    setItems(filteredItems.slice(0, itemsAmount));
  }, [filteredItems, sortType]);

  useEffect(() => {
    setItemsAmount(itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage);
  }, [maxItemsAmount]);

  useEffect(() => {
    setItems(filteredItems.slice(0, itemsAmount));
  }, [itemsAmount]);

  return (
    <div className="products-list">
      <div className="products-list--items">
        {/* Load more */}
        {items.map(item => {
          return (
            <Product
              name={item.name}
              description={item.description}
              price={item.price}
              key={item.id}
              imagePath={item.img}
              rating={item.rating}
              nutrition={item.nutrition}
            />
          );
        })}
      </div>
      {maxItemsAmount > itemsAmount && (
        <Button
          data-testid="load-btn"
          id="products-list--button"
          variant="outlined"
          onClick={() => {
            setItemsAmount(
              itemsAmount + (itemsPerPage > maxItemsAmount ? maxItemsAmount : itemsPerPage)
            );
          }}
        >
          Load more
        </Button>
      )}
    </div>
  );
}
