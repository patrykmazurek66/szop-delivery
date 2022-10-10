import "./productsList.css";
import { axiosGetItems } from "../communicate/Comm";

import { Button } from "@mui/material";
import Product from "../product/Product";

import { useEffect, useState } from "react";
export default function ProductsList({ categories, sortType }) {
  const itemsPerPage = 6;

  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(itemsPerPage);
  const [maxItemsAmount, setMaxItemsAmount] = useState(0);

  async function getAllItems() {
    let itemsArr = await axiosGetItems("http://localhost:3000/items");
    itemsArr = sortItems(itemsArr, sortType);
    setMaxItemsAmount(itemsArr.length);
    setAllItems(itemsArr);
    setItems(itemsArr.slice(0, itemsPerPage));
    setFilteredItems(itemsArr);
  }

  function sortItems(arr) {
    let newArr = arr;
    // console.log("sorting");
    switch (sortType) {
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
    // console.log(newArr);
    return newArr;
  }

  useEffect(() => {
    getAllItems();
  }, []);

  useEffect(() => {
    // console.log(categories, sortType);
    if (categories.length === 0) {
      // console.log(sortType);
      setFilteredItems(sortItems(allItems));
    } else {
      const itemsArr = allItems.filter(item => {
        return categories.includes(item.category);
      });
      // console.log(sortItems(itemsArr, sortType));
      setFilteredItems(sortItems(itemsArr));
    }
  }, [categories, sortType]);

  useEffect(() => {
    setMaxItemsAmount(filteredItems.length);
    // console.log("filtered:", filteredItems);
  }, [filteredItems]);

  useEffect(() => {
    setItemsAmount(itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage);
  }, [maxItemsAmount]);

  useEffect(() => {
    setItems(filteredItems.slice(0, itemsAmount));
  }, [itemsAmount]);

  // useEffect(() => {
  //   setItems(filteredItems.slice(0, itemsAmount));
  // }, [itemsAmount]);

  // useEffect(() => {
  //   if (categories.length === 0) {
  //     setFilteredItems(allItems);
  //   } else {
  //     const itemsArr = allItems.filter(item => {
  //       return categories.includes(item.category);
  //     });
  //     console.log(sortItems(itemsArr, sortType));
  //     setFilteredItems(sortItems(itemsArr, sortType));
  //   }
  // }, [categories]);

  // useEffect(() => {
  //   setMaxItemsAmount(filteredItems.length);
  //   // setItems(
  //   //   filteredItems.slice(
  //   //     0,
  //   //     itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage
  //   //   )
  //   // );
  //   setItemsAmount(itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage);
  // }, [filteredItems]);

  // useEffect(() => {
  //   setFilteredItems(sortItems(filteredItems, sortType));
  //   // setItems(
  //   //   filteredItems.slice(
  //   //     0,
  //   //     itemsPerPage > filteredItems.length ? filteredItems.length : itemsPerPage
  //   //   )
  //   // );
  // }, [sortType]);

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
              rating={item.rating}
              nutrition={item.nutrition}
            />
          );
        })}
      </div>
      {maxItemsAmount > itemsAmount && (
        <Button
          variant="outlined"
          fullWidth
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
