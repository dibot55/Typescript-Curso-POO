// Acceso Protegido - Forma de proteger los atributos y metodos en clases heredadas.

export class AnimalProtected {
  // Atributo protegido
  constructor(
    protected nombre: string
    ) {

  };

  public comer(){
    console.log('Comiendo');
  };

  public moving(){
    console.log("Animal Moviendose");
  };

  public saludar(){
    return `Saludos, Soy ${this.nombre}`
  };

  // Metodo Protegido
  protected doSometing(){
    console.log("Haciendo algo tan importante como debe ser");
  };
};

// Instancia de la clase padre
const dog = new AnimalProtected("Hachi");
console.log(dog.saludar());
dog.comer();

// Herencia
export class Perro extends AnimalProtected {

  constructor(
    nombre:string,
    public especie: string
    ) {
    super(nombre);
    };

  // Metodo consumiento un atributo protegido
  public ladrar(times: number){
    for (let index = 0; index < times; index++){
      console.log(`woof ${this.nombre}`); // <-- Si pones el atributo "nombre" private en la clase padre tampoco puedes modificarlo en una clase hija. Pero con Protected si podemos
    };
  };

  // Metodo consumiento un metetodo protegido de la clase padre
  public quito(){
    return this.doSometing();
  };

  // POLIMORFISMO - Atraemos los metodos de la clase padre y ambos metodos se ejecutan a la vez.
  moving(){
    console.log("El perro se esta moviendo");
    super.moving();
  }
};

// Instancia de la clase hija

  // NO puedes acceder al atributo fuera de la clase padre e hija
  const pug = new Perro("Pelusa", "Pug");
  // console.log(pug.nombre);
  // pug.nombre = "cranky"; // <-- Reasignar atributos de la clase padre no se deberia poder hacer
  // console.log(pug.nombre);

    // Acceder a una atributo protegido
    pug.ladrar(2);

  // No puedes acceder a un metodo protegido
  // pug.doSometing();

    // Acceder a un metodo protegido
    pug.quito();

// POLIMORFISMO
pug.moving();
