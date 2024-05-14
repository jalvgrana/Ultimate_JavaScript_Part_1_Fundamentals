const  person = {
    firstName :"Mosh",
    lastName : 'Hamedani',
    fullName(){
        return `${person.firstName} ${person.lastName}`
    }
};

console.log(person.fullName())

//The problem is that  in this way this is read only. We cannot set the name.