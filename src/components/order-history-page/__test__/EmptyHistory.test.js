import { getByText, render } from "@testing-library/react";
import OrderHisoryPage from "../OrderHistoryPage";

it("checks if without data it works", () => {
  const { container } = render(<OrderHisoryPage />);
  expect(getByText(container, "THERE IS NO HISTORY!")).toBeInTheDocument();
});
