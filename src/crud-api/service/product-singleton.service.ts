// REST API usando singleton
import { Crud } from "../../driver/driver";
import { CreatedProductDto, UpdateProductDto } from "../../tipado-apis/dtos/products.dtos";
import { Product } from "../../tipado-apis/models/product.models";
import axios from "axios";

export class SingletonAPI implements Crud{
  private static instance: SingletonAPI | null = null;
  private _url: string = "https://api.escuelajs.co/api/v1/products";

  private constructor(){};

  public static createInstance(){
    if(SingletonAPI.instance === null){
      SingletonAPI.instance = new SingletonAPI();
      console.log("Se crea la instancia");
    };
    return SingletonAPI.instance;
  };

// READ - Request
async getAll(): Promise<Product[]>{
  const conexion = await axios.get<Product[]>(this._url, {});
  return conexion.data;
};

// Create
async create(data: CreatedProductDto): Promise<Product> {
  const conexion = await axios.post<Product>(this._url, data);
  return conexion.data;
};

// UPDATE
async update(id: Product["id"], changes: UpdateProductDto): Promise<Product> {
  const conexion = await axios.put<Product>(`${this._url}/${id}`, changes); // api.com/api + / + id
  return conexion.data;
};

// FINDBYID
async findOne(id: Product["id"]): Promise<Product | undefined>{
  const conexion = await axios.get<Product | undefined>(`${this._url}/${id}`);//api.com/api + / + id
  return conexion.data;
}

};
