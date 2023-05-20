// Implementar arquitectura - private variable: repository<brand>
import { UpdateCategoryDto, UpdateProductDto } from "../crud-api/dtos/products.dtos";
import { Category } from "../crud-api/models/category.model";
import { Product } from "../crud-api/models/product.models";
import { GenericClass } from "./21-genericos-metodos";

// Consumir la clase GenericClass usando otra clase
export class ProductCRUDService {
  private urlProducts = "https://api.escuelajs.co/api/v1/products";
  private http = new GenericClass<Product>(this.urlProducts);

  async getAll(): Promise<Product[]>{
    // Code
    return this.http.getAll();
  };

  async update(id: Product["id"], dto: UpdateProductDto): Promise<Product>{
    // Code: logica, prermisos
    return this.http.update(id, dto);
  };
};

export class CategoryCRUDService{
  private urlCategories = "https://api.escuelajs.co/api/v1/categories";
  private http = new GenericClass<Category>(this.urlCategories);

  async getAll(): Promise<Category[]>{
    return this.http.getAll();
  };

  async update(id: Category["id"], dto: UpdateCategoryDto): Promise<Category>{
    // Code
    return this.http.update(id, dto);
  };
};
