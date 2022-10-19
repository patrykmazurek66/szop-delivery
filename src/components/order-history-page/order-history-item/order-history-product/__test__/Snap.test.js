import renderer from "react-test-renderer";
import OrderHistoryProduct from "../OrderHistoryProduct";

it("Product renders correctly", () => {
  const tree = renderer.create(<OrderHistoryProduct name={"Burger"} qty={1} cost={5} />).toJSON();
  expect(tree).toMatchSnapshot();
});
