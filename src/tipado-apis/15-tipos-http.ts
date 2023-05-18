// Tipando respuestas http de una API
import axios from "axios";

import { Product } from "./models/product.models"; // Tipado con iterfaces

(async()=>{
  // Tipar una API usanado Interfaces y Genericos
  async function getProductsAsync(): Promise<Product[]> { // Tipado Externo
    const promise = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products", {}); // Tipado interno
    return promise.data;
  };

  const rta = await getProductsAsync();
  console.log(rta.map(item => `${item.id} - ${item.title}`));

  // Forzar tipado - en caso de que una liberia no lo soporte
  async function getProductsAsyncForce(): Promise<Product[]> {
    const promise = await axios.get("https://api.escuelajs.co/api/v1/products", {});
    const promiseTyped = promise.data as Product[]; // Forzado de tipado
    return promiseTyped;
  };

})();
