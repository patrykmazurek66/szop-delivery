import { axiosGetItems } from "../Comm";
import axios from "axios";

jest.mock("axios");

it("returns items array from DB", async () => {
  const item = {
    id: 0,
    name: "giga burger",
    description: "Traditional burger with extra meat",
    price: 10,
    img: "giga-burger.jpg",
    category: "burgers",
    rating: 4,
    nutrition: {
      calories: 520,
      fat: 5,
      proteins: 20,
      carbohydrates: 70,
    },
  };
  const resp = { data: item };
  axios.get.mockResolvedValue(resp);

  axiosGetItems.call().then(data => expect(data).toMatchObject(item));
});
