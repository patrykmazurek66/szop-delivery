import Category from "../Category";
import { render } from "@testing-library/react";

it("checks if category is visible properly", () => {
  const { getByText } = render(<Category name={"burgers"} />);
  expect(getByText("burgers")).toBeInTheDocument();
});
