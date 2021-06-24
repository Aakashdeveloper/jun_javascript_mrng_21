//es5
var name = "Avengers"
var rating = 4.5
var type = "action"
var ind = "Hollywood"

var out = "The "+name+" is an "+type+" movie, with rating of "+rating+" and from ind "+ind+".";
console.log("this is es5",out)
"The Avengers is an action movie, with rating of 4.5 and from ind Hollywood."

//es6
var out1 = `The ${name} is an ${type} movie, with rating of ${rating} and from ind ${ind}.`
"The Avengers is an action movie, with rating of 4.5 and from ind Hollywood."
console.log("this is es6",out1)