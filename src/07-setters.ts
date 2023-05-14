// Setters - Forma de modificar atributos privados de una clase. Es Void por naturaleza.

class MyDateSetters {

  // Constructor
  constructor(
    private year: number = 0,
    private month: number= 0,
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

  private addPadding(value: number):string{
    if(value < 10){
      return `0${value}`;
    };
    return `${value}`;
  };

  public get isLeapYear():boolean{
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  };

  get getDay(){
    // code
    return this.day;
  };

  // Modifica un atributo privado con Setters
  set setDay(setDay: number){
    if(setDay < 1 && setDay > 31) throw new Error("El día debe ser menor o igual a 31");
    this.day = setDay;
  };

  get getMonth(){
    // code
    return this.month;
  }

  set setMonth(setMonth: number){
    if(setMonth < 1 && setMonth > 12) throw new Error("El mes debe ser menor o igual a 12");
    this.month = setMonth;
  };

};

// Instancias
const myNewDateSetters = new MyDateSetters(1993, 7, 9);
console.log(myNewDateSetters.printFormat());

// Get y Set
  // Day
  console.log(myNewDateSetters.getDay);
  myNewDateSetters.setDay = 30;
  console.log(myNewDateSetters.getDay);
  // Month
  console.log(myNewDateSetters.getMonth);
  myNewDateSetters.setMonth = 12;
  console.log(myNewDateSetters.getMonth);
