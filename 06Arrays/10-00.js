const numbers = [1,2,3];

for (number of numbers)
    console.log(number);

console.log("\n******************")
numbers.forEach(function(number) {
    console.log(number);
})

console.log("\n******************")
numbers.forEach(number => console.log(number));

console.log("\n******************") // no se consigue el index con el for_of-loop
numbers.forEach((number, index) => console.log(index, number));