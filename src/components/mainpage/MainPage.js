import "./mainpage.css";

import Footer from "../footer/Footer";
import ProductsList from "../products_list/ProductsList";
import CategoriesList from "../categories_list/CategoriesList";
import Searchbar from "../searchbar/Searchbar";

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="top-page">
        <Searchbar />
        <section className="main-page--hero">
          <CategoriesList />
          <ProductsList />
        </section>
      </div>
      <Footer />
    </div>
  );
}
