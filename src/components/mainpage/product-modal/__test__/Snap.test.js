import renderer from "react-test-renderer";
import ProductModal from "../ProductModal";

it("Product Modal renders correctly", () => {
  const tree = renderer
    .create(
      <ProductModal
        name={"item.name"}
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
