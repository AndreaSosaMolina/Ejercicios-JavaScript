 //Ejercicio 4
  //Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

    const arrNumber1 = [1,2,3];
    const arrNumber2 = [1,2,3,4,5];
    const arrNumber3 = [1,4,7,2];

    let findTheNum = arrNumber1.filter(num =>  arrNumber2.includes(num))
    let find2in3 = arrNumber2.filter(num => arrNumber3.includes(num))

    let findAll = findTheNum.filter(num => find2in3.includes(num))

    console.log(findAll);



//Darle una segunda vuelta para mejorarlo