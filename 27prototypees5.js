function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10
}

var john = new human('John','Delhi')
undefined
john
human {name: "John", city: "Delhi"}
john.legs
undefined

var pepper = new robot('Pepper')
undefined
pepper
robot {name: "Pepper", legs: 2, age: 10}
pepper.city
undefined

//////////(inherit property of robot in human)
// any object made up of human now have access to property of robot
human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}

var john = new human('John','Delhi')
john
human {name: "John", city: "Delhi"}
john.legs
2
john.age
10

robot.prototype = new human()
var pepper = new robot('Pepper')