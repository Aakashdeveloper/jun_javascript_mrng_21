var a = "10"
var b = "20"

a+b
"1020"
parseInt(a)
10
parseInt(b)
20
parseInt(a)+parseInt(b)
30


var a = "23.22"
var b = "71.08"
undefined
parseInt(a)
23
parseInt(b)
71
parseInt(a)+parseInt(b)
94
parseFloat(a)+parseFloat(b)
94.3


var a = "hi"
parseInt(a)
NaN

var c = "10"
var d ="20"
parseFloat(c)+parseFloat(d)
30
Number(c)+Number(d)
30

//es6

var a = "23.22"
var b = "71.08"
undefined
Number(a)+Number(b)
94.3

var c = "10"
var d ="20"
Number(c)+Number(d)
30

var a = "Delhi10"
var b = "10Delhi"

parseInt(a)
NaN

parseInt(b)
10

/////////////
true+true
2
true+false
1

true is equal to 1
false is equal to 0

true+true
2
true+false
1
10+true
11
10-true
9
10/false
Infinity
1+false
1

"a"+true
"atrue"
"a"+false
"afalse"
"true"-"true"
NaN
"10"-"10"
0

////
isNaN (is not a number)

var a = "hii"
var b = 10
var c = true
var d = "20"

isNaN(a) (hi is string)
true

isNaN(b) (10 is number)
false

isNaN(c) (true is equal to 1)
false

isNaN(d) (string pure number is number)
false

var e = "10a"
isNaN(e)
true