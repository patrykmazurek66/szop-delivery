import OrderHistoryInfo from "../OrderHistoryInfo";
import { render } from "@testing-library/react";

it("checks if order history is visible properly", () => {
  const { getByText } = render(
    <OrderHistoryInfo id={123} itemsCount={1} price={5} moreDetails={false} />
  );
  expect(getByText("Order ID: 123")).toBeInTheDocument();
});
