import { render } from "@testing-library/react";
import ProductList from "../ProductsList";
import Product from "../product/Product";

let container = null;
beforeEach(() => {
  // ustaw element DOM jako cel renderowania
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // posprzątaj po zakończeniu

  container.remove();
  container = null;
});

it("number of items on start", () => {
  const { getByText } = render(<ProductList categories={[]} sortType={"name-asc"} />, container);
  console.log(container.firstChild);
  expect(getByText("Load more")).toBeInTheDocument();
});
