import { axiosGetOrderHistory } from "../Comm";
import axios from "axios";

jest.mock("axios");

it("returns orders array from DB", async () => {
  const order = {
    cart: [
      {
        name: "nigiri",
        price: 10,
        quantity: 3,
      },
    ],
    details: {
      name: "Hipolina Szopinska",
      company: "",
      address1: "ulcia 55",
      postalCode: "69-420",
      email: "szop@hipp.com",
      phone: "6969696969",
      address2: "",
      city: "Poznan",
      paymentMethod: "payu",
    },
    id: "1665576776649",
  };
  const resp = { data: order };
  axios.get.mockResolvedValue(resp);

  axiosGetOrderHistory().then(data => expect(data).toMatchObject(order));
});
