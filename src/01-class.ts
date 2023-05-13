// Clases en TS - Construye instancias de objetos

  // Consumir una clase para crear un objeto
const date = new Date();
date.getTime();
date.getFullYear();
date.toISOString();

const date2 = new Date(2000, 10, 14); // El mes comienza desde 0
date2.getDate();
date2.getMonth();
date2.toISOString();

console.log(date);
console.log(date2);

// Creando nuestra propia clase
class Mydate {
  year: number;
  month: number;
  day: number;
  // Asignar los parametros del constructor a las propiedades de la clase
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };
};

const myDateObject = new Mydate (2000, 10, 14); // Retorna tipo "Mydate"
console.log(myDateObject);
