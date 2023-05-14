// Acceso Privado - Protege propiedades y métodos de una clase. Solo se puede modificar dentro de ella.

class MyDatePrivate {
  // Atributos
  private year: number;
  private month: number;
  private day: number;

  // Constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };

  // Metodos
  public printFormat():string{
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
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

  // Este metodo solo se usa dentro de la clase.
  private addPadding(value: number):string{
    if(value < 10){
      return `0${value}`;
    };
    return `${value}`;
  };

  // Acceder a un atributo de manera directa si asi lo queremos
  public getday(){
    return this.day;
  };
};

// Instancias
const myNewDatePrivate = new MyDatePrivate(1993, 7, 9);
console.log(myNewDatePrivate.printFormat());

myNewDatePrivate.add(7, "days");
console.log(myNewDatePrivate.printFormat());

// No puedes acceder a los atributos y modificarlos
// myNewDatePrivate.day = 12;
// console.log(myNewDatePrivate.day);

// No puedes acceder a metodos privados
// myNewDatePrivate.addPadding();

// Acceder a un atributo privado
console.log(myNewDatePrivate.getday());
