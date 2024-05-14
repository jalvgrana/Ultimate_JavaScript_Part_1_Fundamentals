const numbers = [1, 2, 3, 4, 4];

const count = countOcurrences(numbers, 4);

function countOcurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const ocurrence = current === searchElement;
    console.log(accumulator, current, searchElement);
    return accumulator + ocurrence;
  }, 0);
}
