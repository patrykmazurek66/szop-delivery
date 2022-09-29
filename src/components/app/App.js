import "./App.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ProductsList from "../products_list/ProductsList";
import Button from "../button/Button";
import CategoriesList from "../categories_list/CategoriesList";
import TextInput from "../text_input/TextInput";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button sort>SORT</Button>
      <TextInput />
      <section className="main-page">
        <CategoriesList />
        <ProductsList />
      </section>
      <Footer />
    </div>
  );
}

export default App;
