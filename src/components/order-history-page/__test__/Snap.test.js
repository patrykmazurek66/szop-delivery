import renderer from "react-test-renderer";
import OrderHistoryPage from "../OrderHistoryPage";

it("Product renders correctly", () => {
  const tree = renderer.create(<OrderHistoryPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
