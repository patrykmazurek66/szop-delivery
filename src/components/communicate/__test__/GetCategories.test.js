import { axiosGetCategories } from "../Comm";
import axios from "axios";

jest.mock("axios");

it("should fetch categories", () => {
  const category = "burgers";
  const resp = { data: category };
  axios.get.mockResolvedValue(resp);

  return axiosGetCategories.call().then(data => expect(data).toContain(category));
});

//Jaki jest cel mockowania funkjci skoro wtedy nie można sprawdzić co faktycznie zwraca?
