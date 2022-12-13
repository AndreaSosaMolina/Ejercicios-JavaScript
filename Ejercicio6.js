//Ejercicio 6
//Crea una función que redondee un número float a un número específico de decimales. 
// La función debe tener dos parámetros: 
// Primer parámetro es un número float con x decimales
// Segundo parámetro es un int que indique el número de decimales al que redondear
// Evitar usar el método toFixed()
// Ejemplo de uso de la función:
// const roundedResult = roundTo(2.123, 2);
// console.log(roundedResult); // 2.12

// function roundedNums(a, b){

//   const numbers = a.toString().split(".")

//   if(numbers[0] === undefined || numbers[1] === undefined){
//       return 0;
//   }

//   const integerPart = parseInt(numbers[0]);
//   const decimalPart = numbers[1].split("");

//   let decimals = '';

//   for(decimal of decimalPart){
//     if(!decimalPart.length){
//       break;
//     }

//     if(decimals.length < b){
//       decimals += decimal;
//     }
//   }

//   let result = decimals.length ? `${integerPart}.${decimals}` : integerPart

//   return parseFloat(result);
 
// }
// console.log(roundedNums(2.123,2))

function roundNumber(num, dec) {

  let float = parseFloat(num);

  let result = Math.round(float*Math.pow(10,dec))/Math.pow(10,dec);

  return result;

}

console.log(roundNumber(2.13,2))
