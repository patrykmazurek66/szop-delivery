import { fireEvent, getByAltText, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

const savedLocation = window.location;

beforeEach(() => {
  delete window.location;
  window.location = Object.assign(new URL("https://localhost:3005/"), {
    ancestorOrigins: "",
    assign: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
  });
});
afterEach(() => {
  window.location = savedLocation;
});

it("checks if logo refreshes page", () => {
  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const logo = getByAltText(container, "logo");

  fireEvent.click(logo);

  expect(window.location.reload).toHaveBeenCalled();
});
