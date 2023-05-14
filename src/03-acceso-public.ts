// Acceso publico - El crear instancias, ejecutar metodos, acceder a los atributos de la clase se le conoce como: Acceso Publico. Por defecto en Typescript.

class MyDatePublic {
  // Atributos
  public year: number;
  public month: number;
  public day: number;

  // Constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  // Metodos
  public printFormat():string{
    return `${this.day}/${this.month}/${this.year}`;
  };

  public add(amount: number, type: "days" | "month" | "years"){
    if(type === "days"){
      this.day += amount;
    } else if(type === "month"){
      this.month += amount;
    } else if(type === "years"){
      this.year += amount;
    }
  };
};

// Instancias
const myNewDatepublic = new MyDate(1993, 7, 9);
console.log(myNewDatepublic.printFormat());

myNewDatepublic.add(7, "days");
console.log(myNewDatepublic.printFormat());

// Ventajas y Desventajas del Acceso Publico

  // Acceder a los atributos y modificarlos
  myNewDatepublic.day = 12;
  console.log(myNewDatepublic.day);
