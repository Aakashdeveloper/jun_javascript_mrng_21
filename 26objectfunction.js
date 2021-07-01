//constructor notation
var robot = new Object();
robot.name = "Pepper"
robot.age = 4

// es5
// function  as a object
function language(name,country,city){
    this.name = name;
    this.country = country;
    this.city = city;
    this.greet = () => { return `Say Hi to ${name}`}
}

var Hindi = new language('Hindi','India','Delhi')
Hindi
language {name: "Hindi", country: "India", city: "Delhi", greet: ƒ}
Hindi.greet()
"Say Hi to Hindi"
Hindi.age=10000
10000
Hindi
language {name: "Hindi", country: "India", city: "Delhi", age: 10000, greet: ƒ}


var English = new language('English','UK','Manchester')
English
language {name: "English", country: "UK", city: "Manchester", greet: ƒ}
English.greet()

/////////// 
//es6  
class language1{
    constructor(name,city,country){
        this.name = name;
        this.country = country;
        this.city = city;
    }
    greet = () => { return `Say Hi to ${this.name}`}
}

var French = new language1('French','Nice','France')
undefined
French
language1 {name: "French", country: "France", city: "Nice", greet: ƒ}
French.greet()
"Say Hi to French"