import OrderHistoryClient from "../OrderHistoryClient";
import { getByTestId, render } from "@testing-library/react";

it("checks if category is visible properly", () => {
  const { container } = render(
    <OrderHistoryClient
      name={"name"}
      company={"company"}
      city={"city, 00-000"}
      address={"add1, add2"}
      payment={"cash"}
      items={1}
      itemsCost={5}
      delivery={5}
    />
  );

  const nameParag = getByTestId(container, "client-name");
  const cityParag = getByTestId(container, "client-city");
  const addressParag = getByTestId(container, "client-address");

  expect(nameParag.textContent).toBe("name");
  expect(cityParag.textContent).toBe("city, 00-000");
  expect(addressParag.textContent).toBe("add1, add2");
});
