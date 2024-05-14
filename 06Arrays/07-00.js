let numbers = [1,2,3,5,6];
let another = numbers;

// Solution 1 to empty an array
numbers = [];
console.log(numbers);
console.log(another); 

const erase = another.splice(0, another.length)
console.log(erase);