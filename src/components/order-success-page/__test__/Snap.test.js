import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import OrderSuccessPage from "../OrderSuccessPage";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <OrderSuccessPage />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
