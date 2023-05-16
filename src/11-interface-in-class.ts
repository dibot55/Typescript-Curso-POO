// Uso de interfaces en clases - Funcionan similar a las interfaces de los objetos. En la Programación orientada a objetos se consideran como un conjunto de requisitos obligatorios que deben tener todas las clases que implementen esa interfaz. Se usa la palabra "implements".

// Interfaz - Por defecto son unicamente publicas
interface Driver {
  database: string;
  password: string;
  port: number;
  connect():void; // Declarar un metodo obligatorio
  isConnect(name:string):void;
};

// Interfaz en objetos
const driverObject: Driver = {
  database: "",
  password: "",
  port: 0,
  connect: () => {
  },

  isConnect: function (name: string): void {
    console.log(name = this.database);
  }
};

// Interfaz en clases
class Postgress implements Driver{
  // Declarar las variables de una interfaz implementada
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){

  };

  connect(): void {
      console.log("Conectado a Postgress");
  }

  isConnect(name: string): void {
    console.log(name = this.database);
  };
};

class MySQL implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){

  };

  connect(): void {
      console.log("Conectado a Postgress");
  }

  isConnect(name: string): void {
    console.log(name = this.database);
  };
};

class Oracle implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){

  };

  connect(): void {
      console.log("Conectado a Postgress");
  }

  isConnect(name: string): void {
    console.log(name = this.database);
  };
};
