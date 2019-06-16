const person = {
    firstname: 'Rey',
    lastname: 'Villaester',
    country: 'Philippines'
};

const {firstname: fn, lastname} = person;
console.log(`${fn} ${lastname} ${person.country}`);