// Ejercicio 2
// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)
// Dos maneras de hacerlo:

//1 Mejor Solución:
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test']

let cleanArr = arrDirty.filter(Boolean)

console.log(cleanArr)


//2
// function findTruthy(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]) {
//             newArr.push(arr[i])
//         }
//     }
//   return newArr
// }

// console.log(findTruthy(arrDirty))