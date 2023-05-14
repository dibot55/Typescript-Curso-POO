// Getters - Forma de acceder a los atributos protegidos de forma privada pero no pueden modificarse o mutarse. Por definición deben retornar algo.

class MyDateGetters {

  // Constructor - Manera correcta de asignar atributos en TS.
  constructor(
    private year: number = 0,
    private month: number= 0, // <-- Le definios valores por defecto
    private day: number = 0
    ) {

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

  // Acceder a un atributo privado con Getters
  public get getDay(){
    // code
    return this.day;
  };

  // Puedes usar Get tambien para las funciones
  public get isLeapYear():boolean{
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  };
};

// Instancias
const myNewDateGetters = new MyDateGetters(1993, 7, 9);
console.log(myNewDateGetters.printFormat());

// Acceder a un atributo con GET
console.log(myNewDateGetters.getDay); // <-- Aunque parezca una funcion realmente accedes a el como una propiedad. Por lo que no necesita del () para ser ejecutado.

console.log(myNewDateGetters.isLeapYear);

// No puedes modificarlo ni mutarlo
// myNewDateGetters.getDay = 23;
