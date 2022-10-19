import renderer from "react-test-renderer";
import CartPage from "../CartPage";

it("renders correctly", () => {
  const tree = renderer.create(<CartPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
