// REST API
import axios from "axios";
import { Crud } from "../../driver/driver";
import { CreatedProductDto, UpdateProductDto } from "../../tipado-apis/dtos/products.dtos";
import { Product } from "../../tipado-apis/models/product.models";

export class ProductHttpService implements Crud{
  // URI
  private _url: string = "https://api.escuelajs.co/api/v1/products";

  // READ - Request
  async getAll(): Promise<Product[]>{
    const conexion = await axios.get<Product[]>(this._url, {});
    return conexion.data;
  };

  async create(data: CreatedProductDto): Promise<Product> {
    const conexion = await axios.post(this._url, data);
    return conexion.data;
  };

  async update(id: Product["id"], changes: UpdateProductDto): Promise<Product> {
    const conexion = await axios.put(`${this._url}/${id}`, changes); // api.com/api + / + id
    return conexion.data;
  };
  async findOne(id: Product["id"]): Promise<Product | undefined>{
    const conexion = await axios.get(`${this._url}/${id}`); // api.com/api + / + id
    return conexion.data;
  }

};
