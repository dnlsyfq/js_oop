# Javascript Objects
```
Javascript Object = {
  properties
  method
  ...
}
```
```
jsobj.properties
jsobj['properties']

jsobj.method()
jsobj['method']()
```
```
jsobj = {
  color: 'white'
  shirt : function(){
    return `this['color']`   // this.color
  }
}
```
```
var person = {
  name:'John',
  favColor:'Green',
  height:183,
  age:31
}
```
person.age 
person['age']

### Length property

person.name.length

### object methods

person.methodName()

### object constructor

function person(name,age,color){
  this.name = name,
  this.age = age,
  this.favColor = color
}

### Creating objects

```
var p1 = new person("John",42,"green");
var p2 = new person("Amy",21,"red");

document.write(p1.age);
document.write(p2.name);

```

### Object Methods

```
function person(name,age){
  this.name = name ;
  this.age = age;
  this.changeName = function(name){
    this.name = name
  };
}

var p = new person("David",21)
p.changeName("John")
```

* define the function outside of the constructor function and associate it with the object.

```
function person(name,age){
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear;
}

function bornYear(){
  return 2016 - this.age;
}

var p = new person("A", 22);
document.write(p.yearOfBirth());
// Outputs 1994

```

### Array

* Combining
```
Arr.concat(Arr)
```

* Associative array
```
arr['key'] = value 
```

### Math Object 

|Property|Description|
|---|---|
|E|Euler Constant|
|LN2|Natural log 2|
|LN10|Natural log 10|
|LOG2E|Base 2 log euler|
|LOG10E|Base 10 of log euler|
|PI|Constant PI|

### Date Object

* setInterval()
calls a function or evaluates an expression at specified intervals (in milliseconds).
```
function myAlert() {
   alert("Hi");
}
setInterval(myAlert, 3000); // 3 seconds
```
* Date()
current date 
```
new Date()
```

create specified date and time 
```
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

* Date methods 


|Method|
|---|
|getFullYear()|
|getMonth()|
|getDate()|
|getDay()|
|getHours()|
|getMinutes()|
|getSeconds()|
|getMilliseconds()|

```
var d = new Date();
var hours = d.getHours();
```

```
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
```

# Object Oriented 
* class and constructor

```
class obj  {
  constructor(param):
    this.param = param;
}
```

* instantiate object 

```
let obj_variable = new obj(param);
```

* adding methods to class 

```
class obj  {
  constructor(param):
    this.param = param;
    
  method(){
    return this.param
  }
}
```

```
class User {
    constructor(email, username, birthday) {
        this.email = email;
        this.username = username;
        this.birthday = birthday;
    }

    changeUsername(username) {
        this.username = username;
    }
}

user1.changeUsername(“TreehouseStudent2”);
user1['changeUsername'](“TreehouseStudent2”);
```

* getters 

value of property is computed 
value is not stored or updated

```
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

    // method

    speak(){
        console.log(this.sound);
    }

}

const ernie = new Pet('dog',1,'pug');
console.log(ernie.activity);
```

```
class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }
  
    get level(){
      if(this.credits > 90) {
        return 'Senior';
      } else if(this.credits >= 61 || this.credits <= 90){
        return 'Junior';
      } else if(this.credits >= 31 || this.credits <= 60){
        return 'Sophomore';
      } else if(this.credits <= 30 ){
        return 'Freshman';
      }
    }

    stringGPA() {
        return this.gpa.toString();
    }
}

const student = new Student(3.9);
```

* setter methods

receive value and perform logic 
update properties
store properties

```
get owner(){
  return this._owner;
}

set owner(owner){
  this._owner = owner;
  console.log(`setter called: ${owner}`);
}

obj_variable.owner = 'Ashley';
console.log(obj_variable.owner)
```

```
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
```

```
class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level() {
        if (this.credits > 90 ) {
            return 'Senior';
        } else if (this.credits > 60) {
            return 'Junior';
        } else if (this.credits > 30) {
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }

    get major(){
        return this._major;
    }

    set major(major){

        if(this.level === 'Junior' || this.level === 'Senior'){
            this._major = major;
        } else if(this.level === 'Freshman' || this.level === 'Sophomore'){
            this._major = 'None';
        }
    }
}

var student = new Student(3.9, 60);
```

* object interaction

```
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
ernie.owner = new Owner('Ashley','123 Main Street');
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);
```

```
set radius(r) {
    this._radius = r;
    this.area = 3.14 * Math.pow(r, 2);
    this.circumference = 2 * 3.14 * r;
}

get radius() {
    return this._radius;
}



circ.radius = 10;
console.log(circ.area) //output: 314
console.log(circ.circumference) //output: 62.8
circ.radius

```

### Constructor

```
class Car {
  constructor(doors, engine, color){
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const cx5 = new Car(4,'V6','grey');
```

* super
calls the methods of a parent class
  
```
class SUV extends Car{
  constructor(doors,engine,color,carStats){
    super(doors,engine,color,carStats)
  }
}
```