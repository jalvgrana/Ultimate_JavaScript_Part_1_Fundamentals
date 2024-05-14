const numbers = [4];

console.log(numbers);

//Adding at the:
//END
numbers.push(5,6);
console.log(numbers);

//BEGINNING
numbers.unshift(1,2);
console.log(numbers);

//MIDDLE
//a partir de la 2ª posicion, 0 elimino y añado el '3'
numbers.splice(2,0,3);
console.log(numbers);