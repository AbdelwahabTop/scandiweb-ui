import { Book } from "../components/products-types/book.component";
import { Dvd } from "../components/products-types/dvd.component";
import { Furniture } from "../components/products-types/furniture.component";

export const Types = {
  noValue: {
    compo: <></>,
    txt: "kindly select a type to display the rest of the fields",
    title: "-- select an option --",
  },

  dvd: {
    compo: <Dvd />,
    txt: "Please, provide size",
    title: "DVD",
  },

  book: {
    compo: <Book />,
    txt: "Please, provide weight",
    title: "Book",
  },

  furniture: {
    compo: <Furniture />,
    txt: "Please, provide dimensions",
    title: "Furniture",
  },
};
