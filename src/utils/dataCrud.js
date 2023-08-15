import axios from "axios";

const PRODUCTS_URL = "https://www.shido.dev/listing/products";

export const getProducts = async () => {
  let products = await axios.get(PRODUCTS_URL);
  return products;
};
