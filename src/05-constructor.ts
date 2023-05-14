// Constructor - Metodo principal de una clase donde le pasamos los parametros por defecto de la clase para construir la instancia de un objeto.

// Para Typescript no hace falta definir los atributos ni asignarlos en el constructor.

class MyDateConstructor {

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

  // Acceder a un atributo de manera directa si asi lo queremos
  public getday(){
    return this.day;
  };
};
