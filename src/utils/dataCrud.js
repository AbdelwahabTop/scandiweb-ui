import axios from "axios";

const PRODUCTS_URL = "https://scandiweb-abdo.000webhostapp.com/products";

export const getProducts = async () => {
  let products = await axios.get(PRODUCTS_URL);
  return products;
};

/* Due to the limitations of 000webhostapp, I had to use the POST method instead of the DELETE method to delete products. 
As a result, I added an additional route (/products/delete) alongside the existing route (/products) to handle the deletion. 
This was necessary because my application relies on registering routes and methods separately,and I couldn't use the same route with the POST method.
*/
export const deleteProducts = async (temp) => {
  return await axios.post(PRODUCTS_URL + "/delete", JSON.stringify(temp));
};

export const addProduct = async (temp) => {
  return await axios.post(PRODUCTS_URL, JSON.stringify(temp));
};
