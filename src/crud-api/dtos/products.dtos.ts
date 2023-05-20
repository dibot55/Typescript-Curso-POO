// Dtos - Objetos de transferencia de datos.

import { Product } from "../models/product.models";
import { Category, AccessType } from "../models/category.model";
import { IsEnum, IsUrl, validate, validateOrReject } from "class-validator";

// Products
// Omit - Omite los campos seleccionados
export interface CreatedProductDto extends Omit<Product, "id" | "category"> {
  categoryId: Category["id"]; // Acceder al tipado por un indice
};

// Partial - Vuelve opcional a todos las propiedades de la interfaz
export interface UpdateProductDto extends Partial<CreatedProductDto> {};

// Category
export interface CreateCategoryDto extends Omit<Category, "id">{};
  // Decoradores
class CategoryDto implements CreateCategoryDto{
  name!: string;
  @IsUrl()
  image!: string;
  @IsEnum(AccessType)
  access?: AccessType | undefined;
};
(async()=>{
  try {
    const dto = new CategoryDto();
    dto.name = "a",
    dto.image = "b", // No es una URL ERROR
    dto.access = AccessType.PUBLIC

    // Ejecutar los decoradores
    await validateOrReject(dto);

  } catch (error) {
    console.log(error);
  };
})();

export interface UpdateCategoryDto extends Partial<CreateCategoryDto>{};
