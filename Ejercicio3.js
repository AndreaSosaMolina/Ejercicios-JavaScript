//Ejercicio 3
//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  // function getTheCountrys(arr){
  //   let newArr = [];
  //   for(let i = 0; i < arr.length; i++){
  //       if(arr[i].capital === false && arr[i].country === 'Spain'){
  //          newArr.push(arr[i])
  //       }
  //   }
  //   return newArr
  // }
  // console.log(getTheCountrys(arrCities));

  // Correccion:

  function getTheCountrys2(arr){

    return arrCities.filter(x=> x.country==="Spain" && !x.capital)

  }

console.log(getTheCountrys2(arrCities))