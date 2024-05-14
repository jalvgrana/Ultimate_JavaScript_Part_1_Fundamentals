const courses = [
    {id:1, class: 'a'},
    {id:2, class: 'b'},
];

const course = courses.find(course => course.class === 'a');

console.log (course);

