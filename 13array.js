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
(2) ["Delhi", "Mumbai"]
city
(7) [0, "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]

var a = ['a','b','c','d',1]
var b = [4,3,2,1]
a+b
"a,b,c,d,14,3,2,1"
a.concat(b)
(9) ["a", "b", "c", "d", 1, 4, 3, 2, 1]

b.concat(a)
(9) [4, 3, 2, 1, "a", "b", "c", "d", 1]

var c = [4,true]
a.concat(c,b)
(11) ["a", "b", "c", "d", 1, 4, true, 4, 3, 2, 1]

var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
city.indexOf('Delhi')
0
city.indexOf('Venice')
6
city.indexOf('Dubai')
-1
city.indexOf('NewYork')
-1

if value is the part of array you will get index number else -1

var a = "hi";
var b = [1,2,'Delhi'];

Array.isArray(a)
false
Array.isArray(b)
true


var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]

city.sort()
(8) ["Amsterdam", "Delhi", "Helsinki", "London", "Mumbai", "Paris", "Pune", "Venice"]
city
(8) ["Amsterdam", "Delhi", "Helsinki", "London", "Mumbai", "Paris", "Pune", "Venice"]
city.reverse()
(8) ["Venice", "Pune", "Paris", "Mumbai", "London", "Helsinki", "Delhi", "Amsterdam"]



var city =  ['abudhabhi', "Delhi",false, "Mumbai",1,true,'amsterdam',3, "venice",4, "Paris",'nice']
city.sort()
(12) [1, 3, 4, "Delhi", "Mumbai", "Paris", "abudhabhi", "amsterdam", false, "nice", true, "venice"]

[number,all capital letter in order, small letter in order + boolean is also counted as small letter];


var city =  ["Delhi", "Mumbai", "Pune",['Red','Yellow',['Bmw','Audi','Merc'],'Gray'], "Venice", "Paris"]
city[0]
"Delhi"
city[2]
"Pune"
city[3]
(4) ["Red", "Yellow", Array(3), "Gray"]
city[3][0]
"Red"
city[3][2]
(3) ["Bmw", "Audi", "Merc"]
city[3][2][0]
"Bmw"
city[3][2][1]
"Audi"


var a = "gray"
a[0]
'g'
city[0][1]
"e"

city[0][0]
"D"

var city =  ["Delhi", "Mumbai", "Pune",['Red','Yellow',['Bmw','Audi','Merc'],'Gray'], "Venice", "Paris"]
undefined
city.flat()
(9) ["Delhi", "Mumbai", "Pune", "Red", "Yellow", Array(3), "Gray", "Venice", "Paris"]
city.flat(2)
(11) ["Delhi", "Mumbai", "Pune", "Red", "Yellow", "Bmw", "Audi", "Merc", "Gray", "Venice", "Paris"]