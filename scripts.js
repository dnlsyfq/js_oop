const ernie = {
    animal:'dog', // property 
    age:1,
    breed:'pug',
    bark:function(){            // method 
        console.log('woof!');
    }
}

// console.log(ernie.age); // ernie['age']
// ernie.bark();   // ernie['bark']()

// ernie.keys;

// var prop  = 'breed';
// ernie[prop]

ernie.age = 2;
ernie['age'] = 2;
ernie.color = 'black';

console.log(ernie);

