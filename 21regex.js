Regular expresion
^$

// if pattern does not match it will give null 
var a = "Hi"
a.match("^([a-z])$")
null

var a = "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]

// match exact three small case letter
var a = "hii"
a.match("^([a-z]{3})$")

// match range small case letter
var a = "hiir"
a.match("^([a-z]{2,5})$")

// match any length small case letter
var a = "hiir"
a.match("^([a-z]+)$")


var a = "hiirA"
a.match("^([A-Za-z]+)$")


var a = "hiirA"
a.match("^([A-Za-z0-9$]+)$")

var a = "AMSTER"
a.match("^([H-Z]+)$")
null

var a = "AMSTER"
a.match("^([A-Z]+)$")
(2) ["AMSTER", "AMSTER", index: 0, input: "AMSTER", groups: undefined]

var a = "hiirA@"
a.match("^([A-Za-z0-9$#]+)$")

var number = "83534645654"
number.match("^[0-9]{10}$")
null
var number = 83534645654
number.match("^[0-9]{10}$")
VM112:2 Uncaught TypeError: number.match is not a function
    at <anonymous>:2:8
(anonymous) @ VM112:2

var number = 83534645654
number.toString()
"83534645654"
var number = 8353464565
var out = number.toString().match("^[0-9]{10}$")
["8353464565", index: 0, input: "8353464565", groups: undefined]

var email = "a@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
var email = "a@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email = "aa.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$")
null
var email = "aa"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var email = "@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null