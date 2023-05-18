// Consumir API de ProductMemoryService
import { ProductMemoryService } from "./service/product.service";

// Instanciar la clase - Create
const productService = new ProductMemoryService();
productService.create({
  title: "Producto 1",
  price: 100,
  description: "bla bla bla",
  images: [],
  categoryId: 313
});

console.log(productService.getAll());

// Update

// Como el id siempre cambia es mejor usar la posicion del arreglo para este ejemplo
const products = productService.getAll();
const productsId = products[0].id;

productService.update(productsId, {
  title: "Nuevo titulo 1"
});

// ReadById
const rta = productService.findOne(productsId);
console.log(rta);

