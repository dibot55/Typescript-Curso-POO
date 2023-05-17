// Singleton: Constructores Privados - Creas una instancia y esa misma instancia la compartes en todo el proyecto

// Singleton
class MyService {
  // Guarda en memoria la instancia
  static instance: MyService | null = null;

  private constructor( // <-- El constructor tambien tiene un acceso privado
    private name: string
  ){};

  getName(){
    return this.name;
  };

  // Metodo que recibe lo que normalmente se le pasa al constructor
  static create(name: string){
    // Revisamos si ya se creo una instancia o no. Si no creala
    if(MyService.instance === null){
      console.log("Se creo la instancia. Este mensaje solo se ve una vez");
      MyService.instance = new MyService(name);
    };
    return MyService.instance; // Si no esta nulo solo retorna la instancia
  };
};

// Usar el patron de diseño Singleton
const mySingleton = MyService.create("Singleton1");
console.log(mySingleton.getName());

// Ya no se pueden crear mas instancias y solo retorna el primer parametro enviado
const mySingleton2 = MyService.create("Singleton2");
console.log(mySingleton2.getName())

// Multiples Instancias en un constructor publico
// const myServiceName = new MyService("Erika");
// console.log(myServiceName.getName());

// const myServiceName2 = new MyService("Diego");
// console.log(myServiceName2.getName());

// console.log(myServiceName === myServiceName2); // False por que son instancias diferentes
