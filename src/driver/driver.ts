//  Instancia para CRUDs
import { Product } from "../tipado-apis/models/product.models"
import { CreatedProductDto, UpdateProductDto } from "../tipado-apis/dtos/products.dtos"

export interface Crud {
  create(data: CreatedProductDto): Product | Promise<Product>,
  getAll(): Product[] | Promise<Product[]>,
  update(id: Product["id"], changes: UpdateProductDto): Product | Promise<Product>,
  findOne(id: Product["id"]): Product | undefined | Promise<Product | undefined>
};
