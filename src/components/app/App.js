import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ProductsList from "../products_list/ProductsList";
import Button from "../button/Button";
import CategoriesList from "../categories_list/CategoriesList";
import TextInput from "../text_input/TextInput";

function App() {
  const [categories, getCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, [categories]);

  const getAllCategories = function () {
    axios
      .get("http://localhost:3000/categories")
      .then(res => {
        const allCategories = res.data;
        //console.log(allCategories);
        getCategories(allCategories);
      })
      .catch(err => console.log(`Error ${err}`));
  };
  // getAllCategories();
  return (
    <div className="App">
      <Navbar />
      <Button sort>SORT</Button>
      <TextInput />
      <section className="main-page">
        <CategoriesList categories={categories} />
        <ProductsList />
      </section>
      <Footer />
    </div>
  );
}

export default App;
