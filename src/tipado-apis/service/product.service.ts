// Manipulacion de los datos
import { Product } from "./../models/product.models";
import { CreatedProductDto, UpdateProductDto } from "../dtos/products.dtos";
import { faker } from "@faker-js/faker";
import { Crud } from "../../driver/driver";

export class ProductMemoryService implements Crud{
  // Atributos
  private productArray: Product[] = [];

  // Metodos CRUD

  // Create
    create(data: CreatedProductDto): Product{
    // Esto lo crea la base de datos no le hagas caso
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl()
      }
    };
    return this.add(newProduct);
  };
  // Add new product
  private add(product: Product){
    this.productArray.push(product);
    return product;
  };

  // Read
  getAll(){
    return this.productArray;
  };

  // Update
  update (id: Product["id"], changes: UpdateProductDto): Product {
    const index = this.productArray.findIndex(item => item.id === id);
    const prevData = this.productArray[index];
    // Actualización
    this.productArray[index] = {
      ...prevData, // Elementos actuales
      ...changes // Elementos Nuevos
    };
    return this.productArray[index];
  };

  // ReadBy ID
  findOne(id: Product["id"]){
    return this.productArray.find(item => item.id === id)
  };

};
