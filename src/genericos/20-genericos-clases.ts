// Genericos en clases

import axios from "axios";
import { Product } from "../tipado-apis/models/product.models";
import { Category } from "../tipado-apis/models/category.model";

export class GenericClass<T> {

  constructor(
    private url: string
  ){};

  // READ - Request
  async getAll(): Promise<T[]>{
    const conexion = await axios.get<T[]>(this.url, {});
    return conexion.data;
  };

};

(async()=>{

  // Hacer Request de la API products
  const url1:string = "https://api.escuelajs.co/api/v1/products";
  // Instanciamos
  const request = new GenericClass<Product>(url1);
  const producsts = await request.getAll();
  console.log(producsts.map(item => item.title));

  // Hacer Request a la API categories
  const request1 = new GenericClass<Category>("https://api.escuelajs.co/api/v1/categories");
  const categorires = await request1.getAll();
  console.log(categorires.map(item => item.name));

})();
