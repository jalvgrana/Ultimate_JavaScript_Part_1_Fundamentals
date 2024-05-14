first = [1,2,3,4]
second = [5,6,7,8,9]

const combined = [...first, ...second]
const combined2 = [...first, 'a', ...second, 'b'];
console.log(combined)
console.log(combined2)