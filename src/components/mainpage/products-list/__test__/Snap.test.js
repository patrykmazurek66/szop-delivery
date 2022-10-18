import renderer from "react-test-renderer";
import ProductList from "../ProductsList";

it("renders correctly", () => {
  const tree = renderer.create(<ProductList categories={[]} sortType={"name-asc"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
