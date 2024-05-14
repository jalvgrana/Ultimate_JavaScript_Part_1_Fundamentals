const numbers = [1,2,3,4,1, 5,6,7,8,9,10];

console.log(numbers.indexOf('a')); //no existe luego (-1)
console.log(numbers.indexOf(1)); //existe, en posicióni 0
console.log(numbers.indexOf(1,3)); //lo busca pero a partir de la posición 3
console.log(numbers.lastIndexOf(1)); //existe el último 1 en la posicion 4
console.log(numbers.indexOf(1) !== -1); // indica que es cierto que existe 1
console.log(numbers.includes(1)); //nuevo metodo en JS para hacer lo anterior más elegante

