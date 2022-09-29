const axios = require("axios");
import Product from "../product/Product";

export default function axiosGetItems(url) {
  return axios.get(url).then(res => {
    const data = res.data.map(item => {
      return (
        <Product
          name={item.name}
          description={item.description}
          price={item.price}
          key={item.id}
          imagePath={item.img}
        />
      );
    });

    return data;
  });
}
