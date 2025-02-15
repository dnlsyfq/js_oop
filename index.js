const person = {
    name:'Edward',
    city:'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'React', 'Node']
};

person.name = 'John';

console.log(person.name)
console.log(person['name'])

const message = `Hi ${person.name}`
console.log(message);
console.log(person.skills[0]);
console.log(person.skills.join(', '));