// 16- Exercise 7- String Properties

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties(obj) {
    for (let key in obj) {
        //console.log(key);
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

showProperties(movie)