const { stringify } = require("querystring")

= //assignment
== // compare the data
=== /// compare the data and datatype

var a = 20 >>>assignment
var b = "20"

a == b  (we just compare the data)
true
a === b  (we compare the data and datatype)
false

var c = true
var d = "true"
c == d
false
c === d
false

var a = 1
var b = true
a==b
true
a===b
false

///case senstive

var a = "hi"
var b = "Hi"
a == b
false

var a = 10
undefined
var b = 20
undefined
a>b
false
a<b
true
a != b
true
a !== b
true

all compare operator will always return Boolean response

//negation
var a = true
!a
false


var b = 1
!b
false

var a = 10
!a
false
var a = "hi"
!a
false

var a = 0
!a
true
var a = null
!a
true

var a = -1
!a
false

truthy 
> any number except 0 weather +ve or -ve 
> string
> true


falsy
> 0
> false
> null
> undefined