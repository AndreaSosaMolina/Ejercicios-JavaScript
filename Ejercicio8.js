//Ejercicio 8
//Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
// Primer parámetro debe ser el número de bytes
// Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado
// (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.
// Ejemplo de uso de la función:
// const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
// console.log(result); // -12.145GB


 function bytesToUnits(bytes, totalBytes = 3){

  let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let kilobytes = 1000;

  if(bytes === 0) 
    return '0 Bytes';

  if(bytes === 1){
    return '1 Byte';
  }

  let i = Math.floor(Math.log(bytes) / Math.log(kilobytes));

  return parseFloat((bytes / Math.pow(kilobytes, i)).toPrecision(totalBytes)) + units[i];
 
}

console.log(bytesToUnits(12145489451.5932, 5))