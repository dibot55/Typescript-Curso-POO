// Metodos - Define el comportamiento de tus objetos

class MyDate {
  year: number; // <-- Atributos
  month: number;
  day: number;
  // Asignar los parametros del constructor a las propiedades de la clase
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  // Metodos de la clase - Tienen la apariencia de una funcion
  printFormat():string{
    return `${this.day}/${this.month}/${this.year}`;
  };

  add(amount: number, type: "days" | "month" | "years"){
    if(type === "days"){
      this.day += amount;
    } else if(type === "month"){
      this.month += amount;
    } else if(type === "years"){
      this.year += amount;
    }
  };
};

// Instancia - Objeto creado por la clase al hacer un "new MyDate()"

const myNewDate = new MyDate(1993, 7, 9); // <-- Los arguentos de la instancia vienen de los parametros del constructor de la clase.
console.log(myNewDate.printFormat());

myNewDate.add(7, "days");
console.log(myNewDate.printFormat());
