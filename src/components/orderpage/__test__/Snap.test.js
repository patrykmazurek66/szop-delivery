import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import OrderPage from "../OrderPage";

it("Product renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <OrderPage />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
