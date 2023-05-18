// Tipado sacado de https://app.quicktype.io/
import { Category } from "./category.model";

export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  category:    Category;
}
