// Estaticos - Utilizar metodos de una clase sin instanciarla

// Math es una clase estatica
console.log(Math.PI);
console.log(Math.max(1,2,3,4,5,6,7,8,9));

// Crear nuestros propios atributos estaticos
class MyMath{
  // Atributo
  static readonly PI = 3.1415; // <-- Asi puedes acceder de manera directa

  // Metodo
  static max(...args: number[]){
    return args.reduce((max, item) => max > item ? max:item, 0);
  };
};
// Consumir la clase directamente
console.log(MyMath.PI);
// Puedes modificar los atributos estaticos pero no se debe de hacer
// MyMath.PI = 3.1416;

const numbers = [154,62,35,4,5,6,553,234,5,345,34,5,435,46,34,643,46,643,683];
console.log(MyMath.max(...numbers));
