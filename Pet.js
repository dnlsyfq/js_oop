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

const ernie = new Pet('dog',1,'pug');
const vera = new Pet('dog', 8, 'border collie');

console.log(ernie);

console.log(ernie.activity);

ernie.owner = 'Ashley';
console.log(ernie.owner);