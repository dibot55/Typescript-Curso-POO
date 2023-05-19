// Genericos en metodos
import axios from "axios";
import { Product } from "../tipado-apis/models/product.models";
import { Category } from "../tipado-apis/models/category.model";
import { UpdateCategoryDto, UpdateProductDto } from "../crud-api/dtos/products.dtos";

export class GenericClass<T> {

  constructor(
    private url: string
  ){};

  // READ
  async getAll(): Promise<T[]>{
    const conexion = await axios.get<T[]>(this.url, {});
    return conexion.data;
  };

  // UPDATE
  async update<TM, DTO>(id: TM, changes: DTO): Promise<T> {
    const conexion = await axios.put<T>(`${this.url}/${id}`, changes);
    return conexion.data;
  };

};

(async()=>{

  // API products
  const url1:string = "https://api.escuelajs.co/api/v1/products";
  // Instanciamos
  const productInstance = new GenericClass<Product>(url1);
  const getProducts = await productInstance.getAll();
  console.log(getProducts.map(item => item.title));

  // Update
  const updateProducts = await productInstance.update<Product["id"], UpdateProductDto>(183, {
    title: "Cycloclyc",
    description: "Cycloclyc es un producto genérico",
    price: 29.99,
    images: ["https://i.imgur.com/xXQyY0f.jpg"],
  });

  // API categories
  const url2:string = "https://api.escuelajs.co/api/v1/categories";
  // Instanciamos
  const categoryInstance = new GenericClass<Category>(url2);
  const getCategory = await categoryInstance.getAll();
  console.log(getCategory.map(item => item.name));

  // Update
  const updateProducts2 = await categoryInstance.update<Category["id"], UpdateCategoryDto>(18, {
    name: "Cycloclyc",
    image: "imagen"
  });

})();
