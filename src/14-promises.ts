// Promesas en TypeScript - Asincronismo
import axios from "axios"; // Axios

(async()=>{

  // Promesa - Retorna Unknown por defecto
  function delay(time: number){
    // Tipar una promesa <Genericos>
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(()=> {
        resolve(true); // Resuelvelo
      }, time);
    });
    return promise;
  };

  // Await - Retorna Unknown por Defecto
  console.log("---".repeat(10)); // Aqui inicia
  const rta = await delay(3000); // 3 segundos
  console.log(rta); // Aqui termina

  // Promesas en Librerias Externa - Consumiendo una API desde el lado del backend
  function getProducts(){
    const promise = axios.get("https://api.escuelajs.co/api/v1/products", {});
    return promise;
  };

  console.log("---".repeat(10));
  const rta2 = await getProducts();
  console.log(rta2.data);

  // Implementando Async y await en la misma funcion
  async function getProductsAsync() {
    const promise = await axios.get("https://api.escuelajs.co/api/v1/products", {});
    return promise.data;
  };

  console.log("---".repeat(10));
  const rta3 = await getProductsAsync();
  console.log(rta3);

})();
