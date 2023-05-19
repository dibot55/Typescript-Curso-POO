// Consumiendo una REST API
import { ProductHttpService } from "./service/product-http.service"; // REST API
// Podemos hacer un singleton para una REST API

(async()=>{
  // Instancia
  const rest = new ProductHttpService();
  console.log("----".repeat(10));

  // Metodo GetALL
  console.log("Get ALL");
  const products = await rest.getAll();
  console.log(products);
  console.log(products.map(item => item.id));
  console.log(products.map(item => item.title));

  // Metodo Update
  console.log("Update");
  const productId = products[0].id;
  await rest.update(productId, {
    title: "cycloclyc is here"
  });

  // Metodo findOne
  console.log("FindOne");
  const product = await rest.findOne(productId);
  console.log(product);

  // Metodo Create
  console.log("Create");
  const newProduct = await rest.create({
    title: "Mi producto",
    description: "Desc",
    price: 0,
    images: ["imagen.net"],
    categoryId: 1
  });
  console.log(newProduct);

})();
