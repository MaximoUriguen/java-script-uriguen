/*let numeroNueve = 9
let numeroOcho = 8
console.log (numeroNueve)
console.log (numeroOcho)
let edad = (2023 - 2009) 
alert ('mi edad es ' + edad ) 
let nombre = prompt ( 'cual es tu nombre ' )
alert ('hola bienvenid@ ' + nombre)
let edadVisitante =  prompt 
let nombreAlumno
let apellidoAlumno

nombreAlumno =  prompt ('cual es tu Nombre')
apellidoAlumno  =  prompt ('y tu apellido')
alert ('bienvenid@ ' + nombreAlumno +' ' + apellidoAlumno)
console.log ('hola ' + nombreAlumno + apellidoAlumno)
let diez = (10)
let tres = (3)
resultadoMultiplicacion = ( diez * tres)
alert ('el resultado de la multiplicacion es ' + resultadoMultiplicacion)

function calcularPromedio (a,b,c)
{
let promedio = a + b + c
promedio = promedio / 3
return promedio 
}
alert (calcularPromedio(7,8,9))
calcularPromedio = prompt ('ingrese 3 numeros ')
alert (calcularPromedio)
/* hacer una funcion que calcula al cubo de  un numero*/
/*
function calcularAlCubo() {
    let numeroElevado = prompt ('ingrse un numero ')
     return numeroElevado * numeroElevado * numeroElevado
}

alert (calcularAlCubo())

function multiplicar () {
let numeroAmultiplicar = prompt ('ingrese dos numeros separados por comas para multiplicar')
return numeroAmultiplicar * numeroAmultiplicar
}
alert (multiplicar ())
function dividir () {
   let numeroAdividir = prompt ('ingrese dos numeros separados por comas para dividir')
   return numeroAdividir / numeroAdividir
    }

    function sumar () {
       let numeroAsumar = prompt ('ingrese dos numeros separados por comas para sumar')
       return numeroAsumar + numeroAsumar
        }

        function restar () {
           let numeroArestar = prompt ('ingrese dos numeros separados por comas restar')
           return numeroArestar - numeroArestar
            }

            /* x^2+5
function operacion(a) {
   let operation = a * a + 5
   return operation
}
console.log(operacion(5))

function  saludo () {
   let nombresao = prompt("cual es tu nombre ")
   let apellidino = prompt("cual es tu apellido ")
   return ("bievenid@ " + nombresao  + + apellidino)
}

alert (saludo())
function saludaso (a, b){
  let saludasao = "bienvenid@ " + a + b 
   return saludasao 
}
alert (saludaso("mixi ", "sidain"))
 a) x^2-x-10
  b) (x-3)*2
  c) x*x^2+20
  d) (x/2)+5
  e) x^3+x^2+10
  f) (x*10)*5
*/ 
function cubo (b){
   return b * b * b 
}
function cuadrado (a){
   return a * a
}
function cuenta1 (x){
 let resultado = cuadrado(x) - x -10
return  resultado
}
function cuenta2 (x){
 let resultado =  (x-3) * 2
 return resultado 
}
function cuenta3 (x){
   let resultado = x * cuadrado(x) + 20
   return resultado 
}
function cuenta4 (x){
   let resultado = (x/2) + 5
   return resultado  
}
function cuenta5 (x) {
let resultado = cubo(x) + cuadrado(x) + 10 
return resultado
}
function cuenta6 (x) {
 let resultado =  (x*10)*5
 return resultado 
}


let TuPosicion = Number(prompt ('ingresa el numero de tu posicion en el rugby'))

if (TuPosicion <= 8)
{
   alert('sos foward')
}else {
   alert ('sos 3/4')
}
let carne = Boolean(prompt ('¿tu cuchillo esta afilado? ingresa true o false '))
if(carne == true)
{
   alert ('vas a poder tu asado tranquilo')
}else {
   alert ('no vas a poder comer el asado tranquilo, si no sabes como afilarlo segui el tutorial que te dejo https://youtu.be/dULUl59Grtk?feature=shared')
}

function Mayor (a, b){
   if (a>b){
      console.log ('el numero a es mayor al b')
      
   }else if (a == b)
console.log ('son iguales ')
}else {
   console.log ('el numero b es mayor al a ')
}

function determinante (a) {
   if (a<0){
      console.log ('tu numeero es negativo ')
   } else if (a == 0){
      console.log ('tu numero es cero')
   } else {
      console.log ('tu numero es  positivo')
   }

}

function entrevalores (a){
   if ((a >= 25) && (a<=255)){
      return console.log('true')
   }else{
      console.log = ('flase')
   }
   
}

