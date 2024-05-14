//Eliminar

const numbers = [1,2,3,4,5,6];

//End
const last = numbers.pop();
console.log(numbers);
console.log(last)

//Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

//Middle
const middle = numbers.splice(2, 1); // starting in... how many items we eliminate
console.log(numbers);
console.log(middle);
