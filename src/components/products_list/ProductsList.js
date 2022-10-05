import "./productsList.css";
import { axiosGetItems } from "../communicate/Comm";

import Button from "../button/Button";
import Product from "../product/Product";

import { useEffect, useState } from "react"; // eslint-disable-next-line
export default function ProductsList({ categories, sortType }) {
  const itemsPerPage = 6;

  const [items, setItems] = useState([]); // eslint-disable-next-line
  const [allItems, setAllItems] = useState([]); // eslint-disable-next-line
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(itemsPerPage);
  const [maxItemsAmount, setMaxItemsAmount] = useState(0);

  function sortItems(arr, sort) {
    let newArr = arr;
    switch (sort) {
      case "price-asc":
        newArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-dsc":
        newArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "name-asc":
        newArr.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
        break;
      case "name-dsc":
        newArr.sort((a, b) => (b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1));
        break;
      default:
        newArr.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
        break;
    }
    return newArr;
  }

  async function getAllItems() {
    let itemsArr = await axiosGetItems("http://localhost:3000/items");
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
    setItems(filteredItems.slice(0, itemsAmount));
  }, [itemsAmount, allItems]);

  useEffect(() => {
    if (categories.length === 0) {
      setFilteredItems(allItems);
    } else {
      const itemsArr = allItems.filter(item => {
        return categories.includes(item.category);
      });
      setFilteredItems(itemsArr);
    }
  }, [categories]);

  useEffect(() => {
    setMaxItemsAmount(filteredItems.length);
    setItems(
      filteredItems.slice(
        0,
        itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage
      )
    );
    setItemsAmount(itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage);
  }, [filteredItems]);

  useEffect(() => {
    setFilteredItems(new sortItems(allItems, sortType));
    setItems(
      filteredItems.slice(
        0,
        itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage
      )
    );
  }, [sortType]);

  return (
    <div>
      <div className="products-list">
        {items.map(item => {
          return (
            <Product
              name={item.name}
              description={item.description}
              price={item.price}
              key={item.id}
              imagePath={item.img}
            />
          );
        })}
      </div>
      {maxItemsAmount > itemsAmount && (
        <Button
          load
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
