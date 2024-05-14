const numbers = [1, 2, 3, 4, 4];

const count = countOcurrences(numbers, 4);

function countOcurrences(array, searchElement) {
    let count = 0;
    for(let element of array)
        if (element === searchElement)
            count++;
    //return count;
    console.log(count);
}