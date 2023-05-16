// Herencia - Los atributos y metodos son heredados de una clase a otra para evitar redundancia de codigo. Los metodos son accedidos por defecto con un "extends" y los atributos con un super(nombre_del_atributo).

export class Animal {
  constructor(public nombre: string) {

  }

  public comer(){
    console.log('Comiendo');
  };

  public moving(){
    console.log("Moviendose");
  };

  public saludar(){
    return `Saludos, Soy ${this.nombre}`
  };

};

// Instancia
const dog = new Animal("Hachi");
console.log(dog.saludar());
dog.comer();

// Herencia - extends{}
export class Perro extends Animal {
  // Extendiendo Atributos
  constructor(
    nombre:string, // <-- NO de le define un alcance por que estariamos doblando el atributo
    public especie: string
    ) {
    super(nombre); // Desde la clase hija llamamos al constructor de la clase padre para traer el atributo "nombre"
    };

  // Extendiendo Metodos
  public ladrar(times: number){
    for (let index = 0; index < times; index++){
      console.log("woof");
    };
  };
};

// Instancia
const pug = new Perro("Pelusa", "Pug");
// Metodos de la clase padre
console.log(pug.saludar());
pug.comer();
pug.moving();
// Metodos de la clase hija
pug.ladrar(5);
console.log(pug.especie);
