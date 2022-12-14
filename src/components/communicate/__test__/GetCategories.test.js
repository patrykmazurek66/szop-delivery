import { axiosGetCategories } from "../Comm";
import axios from "axios";

jest.mock("axios");

it("should fetch categories", async () => {
  const category = "burgers";
  const resp = { data: category };
  axios.get.mockResolvedValue(resp);

  return axiosGetCategories.call().then(data => expect(data).toContain(category));
});
