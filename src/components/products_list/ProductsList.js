import "./productsList.css";

import Button from "../button/Button";
import Product from "../product/Product";

import { useEffect, useState } from "react";

export default function ProductsList() {
  const axios = require("axios");
  const [items, getItems] = useState([]);
  const [pageNum, getPageNum] = useState(0);
  async function getNewItems() {
    const { data } = await axios.get("http://localhost:3000/items", {
      params: {
        page: pageNum,
      },
    });

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
  }, []);

  const loadMore = () => {
    getPageNum(1 + pageNum);
    getNewItems();
  };

  return (
    <div>
      <div className="products-list">{items}</div>
      <Button load onClick={loadMore}>
        Load more
      </Button>
    </div>
  );
}
