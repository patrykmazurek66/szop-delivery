import { fireEvent, getByLabelText, getByTestId, getByText, render } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { act } from "react-test-renderer";
import ContactDataContainer from "../ContactDataContainer";

it("now checks all inputs with proper data", () => {
  const { container } = render(
    <BrowserRouter>
      <ContactDataContainer />
    </BrowserRouter>
  );
  let inputs;
  const onSubmit = jest.fn(e => {
    inputs = e.target.elements;
  });

  const form = getByTestId(container, "form");
  form.onsubmit = onSubmit;
  const btn = getByText(container, "Order");

  const nameInput = getByLabelText(container, "Full Name");
  nameInput.value = "Jan Kowalski";
  const companyInput = getByLabelText(container, "Company Name");
  companyInput.value = "Capgemini";
  const address1Input = getByLabelText(container, "Address");
  address1Input.value = "Legnicka 3";
  const postalInput = getByLabelText(container, "Postal Code");
  postalInput.value = "50-555";
  const mailInput = getByLabelText(container, "Email address");
  mailInput.value = "mail@me.com";
  const phoneInput = getByLabelText(container, "Phone");
  phoneInput.value = "111222333";
  const address2Input = getByLabelText(container, "Address Next Line");
  address2Input.value = "9";
  const cityInput = getByLabelText(container, "City");
  cityInput.value = "Wroclove";

  fireEvent.click(btn);

  expect(inputs[0].value).toBe("Jan Kowalski");
  expect(inputs[1].value).toBe("Capgemini");
  expect(inputs[2].value).toBe("Legnicka 3");
  expect(inputs[3].value).toBe("50-555");
  expect(inputs[4].value).toBe("mail@me.com");
  expect(inputs[5].value).toBe("111222333");
  expect(inputs[6].value).toBe("9");
  expect(inputs[7].value).toBe("Wroclove");
});
