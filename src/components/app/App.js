import "./App.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ProductsList from "../products_list/ProductsList";
import CategoriesList from "../categories_list/CategoriesList";
import Searchbar from "../searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <div className="top-page">
        <Navbar />
        <Searchbar />
        <section className="main-page">
          <CategoriesList />
          <ProductsList />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
