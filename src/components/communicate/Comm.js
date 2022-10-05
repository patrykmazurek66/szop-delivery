import axios from "axios";

export function axiosGetItems(url) {
  return axios.get(url).then(res => {
    return res.data;
  });
}

export function axiosGetCategories(url) {
  return axios.get(url).then(res => {
    return res.data;
  });
}
