import renderer from "react-test-renderer";
import OrderItem from "../OrderItem";

it("renders correctly", () => {
  const tree = renderer.create(<OrderItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
