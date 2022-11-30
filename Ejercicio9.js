//Ejercicio 9
//Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
// La función debe tener un objeto como único parámetro.
// Ejemplo de uso de la función:
// const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
// const myObjLowercase = toLowercaseKeys(myObject);
// console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }


  function objToLowerCase(obj) {
    
    let objToArray = Object.entries(obj)

    let arrayToObj =  Object.fromEntries(
      objToArray.map(([key, value]) => {
        return [key.toLowerCase(), value]
      })
    )

    return arrayToObj

  }

  console.log(objToLowerCase({NamE: 'Charles', ADDress: 'Home Street'}))
