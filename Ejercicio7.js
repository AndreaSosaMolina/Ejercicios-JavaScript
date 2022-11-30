//Ejercicio 7
//Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
// La función debe tener dos parámetros:
// Primer parámetro es un objeto con x número de campos y valores
// Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
// Ejemplo de uso de la función:
// const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
// console.log(result); // {a: 1, c: 3}

//Corregir el segundo parametro


function returnFalsyValues(obj, type){

  let mainObj = Object.values(obj);

  mainObj.forEach(elem => {
    if(typeof mainObj[elem] === type){
      
      delete mainObj[elem]
    }
    
  })

  return mainObj.filter((item)=> item !== undefined || item !== null )

}

console.log(returnFalsyValues({ a: 1, b: '2', c: 3 },'string'))