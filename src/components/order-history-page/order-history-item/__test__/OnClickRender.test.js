import OrderHistoryItem from "../OrderHistoryItem";
import { fireEvent, getByTestId, render } from "@testing-library/react";

it("checks if order history item and clicked is visible properly", () => {
  const { container } = render(
    <OrderHistoryItem
      item={{
        cart: [{ name: "bibimbap", price: 6.5, quantity: 7 }],
        details: {
          name: "andrzej kotlownia",
          company: "",
          address1: "add1",
          postalCode: "00-000",
          email: "mail@me.com",
          phone: "111222333",
          address2: "add2",
          city: "city",
          paymentMethod: "payU",
        },
        id: "1665754902954",
      }}
    />
  );

  const button = getByTestId(container, "button");

  expect(container.firstChild.children).toHaveLength(1);
  fireEvent.click(button);
  expect(container.firstChild.children).toHaveLength(3);
});
