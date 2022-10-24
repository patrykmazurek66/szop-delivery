import renderer from "react-test-renderer";
import OrderItemsContainer from "../OrderItemsContainer";

it("Product renders correctly", () => {
  const tree = renderer.create(<OrderItemsContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
