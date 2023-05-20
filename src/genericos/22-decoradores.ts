// Decoradores - Funciones que agregan validaciones o comportamientos extra a las clases, metodos, propiedades y parametros de funciones. Se ejecutan al momento de ejecutar una clase o metodo que esten decorando.

// Usamos Class-Validator: Mayuscula para Decorador y Minuscula para Funcion
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';


export class Post {
  // Por defecto pide que inicialices los atributos en el constructor - usa ! para decirle a TS que lo inicializaras en otro momento
  // Da errores en los decoradores por que tienen datos indefinidos los atributos.
  // Los decoradores por defecto vienen desabilitados. Activalos en tu tsconfig.json
  @Length(10, 20)
  title!: string;

  @Contains('hello')
  text!: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating!: number;

  @IsEmail()
  email!: string;

  @IsFQDN()
  site!: string;

  @IsDate()
  createDate!: Date;
}
// Validar decoradores
(async()=>{
  try {
    const dto = new Post();
    dto.title = "s",
    dto.createDate = new Date();
    dto.email= "dibot@asdasd.com"
    await validateOrReject(dto);

  } catch (error) {
    console.log(error);
  }
})()
