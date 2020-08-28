# Javascript Objects

var person = {
  name:'John',
  favColor:'Green',
  height:183,
  age:31
}

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





