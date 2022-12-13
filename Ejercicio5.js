//Ejercicio 5
//Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que
//sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
//Ejemplo: {city: "Logroño", isSpain: "true"}


const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  

// function inSpain(arr){
//     let newArr = [];
//      for(let i = 0; i < arr.length; i++){
//         if(arr[i].country === 'Spain' && arr[i].capital === false){
//           delete arr[i].capital
//           delete arr[i].country
//           arr[i].isSpain = true
//           newArr.push(arr[i])
//         }
//      }
//      return newArr;
// }
//  console.log(inSpain(arrCities2))

// Correccion:

 console.log(

  arrCities2.filter(c => !c.capital).map(x=>({city: x.city, isSpain: x.country === "Spain"}))

)