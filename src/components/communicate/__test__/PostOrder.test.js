import axios from "axios";
import { axiosPostOrder } from "../Comm";

jest.mock("axios");

it("Should post order", async () => {
  const data = {
    data: {
      cart: [
        {
          name: "egg burger",
          price: 8.5,
          quantity: 1,
        },
      ],
      details: {
        name: "andrzej kotlownia",
        company: "pwr",
        address1: "miernicza 4",
        postalCode: "55-777",
        email: "harnas@mail.me",
        phone: "777888999",
        address2: "54",
        city: "wroclove",
        paymentMethod: "blik",
      },
      id: "1665641607260",
    },
  };
  JSON.parse = jest.fn().mockImplementationOnce(() => {
    return {
      cart: [
        {
          name: "egg burger",
          price: 8.5,
          quantity: 1,
        },
      ],
    };
  });

  axios.post.mockImplementationOnce(() => Promise.resolve(data));

  console.log(Promise.resolve(data));
  expect(axiosPostOrder(data)).toEqual(Promise.resolve(data));
});

// ?????????????
