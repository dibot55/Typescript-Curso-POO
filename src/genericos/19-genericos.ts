// Genericos - Envia tipado como parametros

import { Perro } from "../08-herencia";

// function getValue(value: number | string){
//   return value;
// }

// getValue(12).toFixed();

// Generico
function getValue<T>(value: T){
  return value;
};

// TS infiere el tipo de dato de manera automatica
getValue(12).toFixed();
getValue("12").toLowerCase();
getValue([]).map(item => item);

// Enviar tipado
getValue<number>(12).toFixed();
getValue<string>("12").toLowerCase();
getValue<number[]>([]).map(item => item);

// Enviar tipado en clases
const hachi = new Perro("hachi", "callejero");
getValue<Perro>(hachi).ladrar(5);
