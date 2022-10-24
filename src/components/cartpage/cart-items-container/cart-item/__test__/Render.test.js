import { fireEvent, getByTestId, render } from "@testing-library/react";
import CartItem from "../CartItem";

it("check if renders properly", () => {
  const { getByText } = render(
    <CartItem name={"burger"} price={5} qty={1} key={"burger"} refresh={() => {}} />
  );

  expect(getByText("burger")).toBeInTheDocument();
});

it("check if renders number properly", () => {
  const { getByDisplayValue } = render(
    <CartItem name={"burger"} price={5} qty={5} key={"burger"} refresh={() => {}} />
  );

  expect(getByDisplayValue("5")).toBeInTheDocument();
});

it("checks if buttons working +1/-1", () => {
  const { container } = render(
    <CartItem name={"burger"} price={5} qty={1} key={"burger"} refresh={() => {}} />
  );
  const input = getByTestId(container, "qty");
  const minusBtn = getByTestId(container, "btn-min");
  const plusBtn = getByTestId(container, "btn-pls");

  fireEvent.click(plusBtn);
  expect(input.value).toBe("2");

  fireEvent.click(minusBtn);
  expect(input.value).toBe("1");
});

it("checks if delete button works", () => {
  const mockedRefresh = jest.fn();
  const { container } = render(
    <CartItem name={"burger"} price={5} qty={1} key={"burger"} refresh={mockedRefresh} />
  );
  const div = document.createElement("div");
  div.appendChild(container);
  const deleteBtn = getByTestId(container, "btn-del");

  console.log(container.childElementCount);
  fireEvent.click(deleteBtn);
  expect(mockedRefresh).toBeCalled();
});
