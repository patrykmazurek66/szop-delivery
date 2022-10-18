import renderer from "react-test-renderer";
import Product from "../Product";

it("Product renders correctly", () => {
  const tree = renderer
    .create(
      <Product
        name={"nazwa"}
        description={"item.description"}
        price={"item.price"}
        key={"item.id"}
        imagePath={"blank.png"}
        rating={5}
        nutrition={{
          calories: 520,
          fat: 5,
          proteins: 20,
          carbohydrates: 70,
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
