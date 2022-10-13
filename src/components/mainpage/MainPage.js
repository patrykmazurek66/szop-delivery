import "./mainpage.css";

import Footer from "../footer/Footer";
import ProductsList from "../products_list/ProductsList";
import CategoriesList from "../categories_list/CategoriesList";
import Sort from "../sort/Sort";

import { useState } from "react";

export default function MainPage() {
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState("");

  function handlerFilter(e) {
    setCategories(e);
  }
  function handlerSort(e) {
    setSort(e);
  }

  return (
    <div className="main-page">
      <div className="top-page">
        <Sort handler={handlerSort} />
        <section className="main-page--hero">
          <CategoriesList handler={handlerFilter} />
          <ProductsList categories={categories} sortType={sort} />
        </section>
      </div>
      <Footer />
    </div>
  );
}
