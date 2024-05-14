const courses = [
    {id:1, class: 'a'},
    {id:2, class: 'b'},
];

const course = courses.find(function(course){
    return  course.class === 'a'
});

console.log (course);

const index = courses.findIndex(function(course){
    return  course.class === 'a'
});

console.log (index);