// Dtos - Objetos de transferencia de datos.

import { Product } from "../models/product.models";
import { Category } from "../models/category.model";

// Omit - Omite los campos seleccionados
export interface CreatedProductDto extends Omit<Product, "id" | "category"> {
  categoryId: Category["id"]; // Acceder al tipado por un indice
};

// Partial - Vuelve opcional a todos las propiedades de la interfaz
export interface UpdateProductDto extends Partial<CreatedProductDto> {};
