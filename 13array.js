// array is a collection of similar/ homogenious datatype as well as hetrogenious

var a = [1,4,56,32,231,4,5]    (Array of Number)
var b = ['es', "ds",'3r','dg'] (Array of String)
var c = [true,false,false,true](Array of Boolean)

var d = [1,4,'es', "ds",false,true,56,'sdf',32,231,4,true,5]

var city = ["Delhi","Mumbai","Pune","London","Helsinki"]
undefined
typeof(city)
"object"

city.length
5
city[0]
"Delhi"
city[1]
"Mumbai"
city[city.length-1]
"Helsinki"

var city = ["Delhi","Mumbai","Pune","London","Helsinki"]

city.push('Amsterdam')
6
city
(6) ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam"]
city.push('Venice','Paris')
8
city
(8) ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]

var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
undefined
city.pop()
"Paris"
city

var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
city.pop()
"Paris"
city
(7) ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice"]

city.pop(2)
"Venice"

city.pop(2000000)
"Amsterdam"

city
(5) ["Delhi", "Mumbai", "Pune", "London", "Helsinki"]
city.pop()
"Helsinki"

var city = ["Delhi", "Mumbai", "Pune", "London", "Helsinki"]
city.unshift('Nice')
6
city
(6) ["Nice", "Delhi", "Mumbai", "Pune", "London", "Helsinki"]
city.shift()
"Nice"

push > add in the end of the array
unshift > add in the beginning of the array
pop > always remove the last value of array 
shift > always remove the first value of array 


var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
undefined
city.slice(1)
(7) ["Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
city
(8) ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
city.slice(2,5)
(3) ["Pune", "London", "Helsinki"]
city.slice(-1)
["Paris"]



var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
//
city.splice(start, deletecount, value to add)

//  remove 2 value on index number 2
var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
city.splice(2,2)

//on index 3 add 2 values
city.splice(3,0,'Dubai','Hongkong')
city
(8) ["Delhi", "Mumbai", "Helsinki", "Dubai", "Hongkong", "Amsterdam", "Venice", "Paris"]

// on index 4 remove 1 value and add 1 value
city.splice(4,1,'Indore','AbuDhabi')
["Hongkong"]
city
(9) ["Delhi", "Mumbai", "Helsinki", "Dubai", "Indore", "AbuDhabhi", "Amsterdam", "Venice", "Paris"]



var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
undefined
city.splice(0,2,2)
(2) ["Delhi", "Mumbai"]
city
(7) [2, "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]0: 21: "Pune"2: "London"3: "Helsinki"4: "Amsterdam"5: "Venice"6: "Paris"length: 7__proto__: Array(0)
var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
undefined
city.splice(0,2,0)
(2) ["Delhi", "Mumbai"]0: "Delhi"1: "Mumbai"length: 2__proto__: Array(0)
city
(7) [0, "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]