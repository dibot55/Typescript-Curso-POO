// Clases abstractas - Restringe la creación de instancias de clases padre. Permite solo las de clases hijas

// Se hace usando la palabra "abstract" en la clase padre
import { AnimalProtected, Perro } from "./09-protected-access";

// Instanciar clase padre - No te va permitir instanciar.
const animal = new AnimalProtected("Animalito naim");
animal.saludar();

// Instanciar clase hija
const hachi = new Perro("Hachi", "Callejero");
hachi.ladrar(5);
