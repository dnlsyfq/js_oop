class Pet {
    // constructor method
    constructor(animal,age,breed,sound) {
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;
    }

    // dynamic value

    get activity(){
        const today = new Date();
        const hour = today.getHours();
        if(hour > 8 && hour <= 20){
            return 'playing';
        } else {
            return 'sleeping';
        }
    }

    get owner(){
        return this._owner;
    }

    set owner(owner){
        this._owner = owner;
        console.log(`setter called: ${owner}`);
    }

    // method

    speak(){
        console.log(this.sound);
    }

}

class Owner{
    constructor(name,address) {
        this.name = name;
        this.address = address;
    }

    set phone(phone){
        const phoneNormalized = phone.replace(/[^0-9]/g,'');
        this._phone = phoneNormalized;
    }

    get phone(){
        return this._phone;
    }
}

const ernie = new Pet('dog',1,'pug');
const vera = new Pet('dog', 8, 'border collie');

// console.log(ernie);

// console.log(ernie.activity);

// ernie.owner = 'Ashley';
// console.log(ernie.owner);

ernie.owner = new Owner('Ashley','123 Main Street');
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);