import axios from "axios";

const PRODUCTS_URL = "https://www.shido.dev/listing/products";

export const getProducts = async () => {
  let products = await axios.get(PRODUCTS_URL);
  return products;
};

export const deleteProducts = async (ids) => {
  //   console.log(ids);
  return await axios.delete(PRODUCTS_URL, {
    data: {
      id: ids,
    },
  });
};
