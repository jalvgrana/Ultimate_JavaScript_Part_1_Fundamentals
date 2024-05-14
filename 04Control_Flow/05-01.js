
// nunca se llega a ejecutar
let i = 9;

while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// se ejecuta una vez 
let a = 9;

do {
  if (a % 2 !== 0) console.log(a);
  a++;
} while (a < 5);
