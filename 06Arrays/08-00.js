first = [1,2,3,4]
second = [5,6,7,8,9]

const combined = first.concat(second);
console.log(combined);

const sliced2 = combined.slice(2)
const sliced1 = sliced2.slice(2, 4)
console.log(sliced2);
console.log(sliced1);