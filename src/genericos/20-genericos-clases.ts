// Genericos en clases

import axios from "axios";
import { Product } from "../tipado-apis/models/product.models";

export class GenericClass<T> {

  constructor(
    private url: string
  ){};

  // READ - Request
  async getAll(){
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
  producsts.map(item => item.title);


  // Hacer Request a la API categories
  const request1 = new GenericClass<Product>("https://api.escuelajs.co/api/v1/categories");
  console.log(request1.getAll());

})();
