// Consumiendo una REST api usando singleton
import { SingletonAPI } from "./service/product-singleton.service";

(async()=>{

  // Creando instancia de singleton
  const singleton = SingletonAPI.createInstance();

  console.log("Get ALL");
  const products = await singleton.getAll();
  console.log(products);
  console.log(products.map(item => item.id));
  console.log(products.map(item => item.title));

})();
