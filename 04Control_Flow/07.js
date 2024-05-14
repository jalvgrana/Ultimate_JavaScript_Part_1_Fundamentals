// 7- For...in

const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue', 'yellow'];
for (let index in colors)
    console.log(index, colors[index])