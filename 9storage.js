var >  we can redeclare and reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign 

var a = 10;

var a; > declare
a=10; > assignment

> var a = 10
> a 
10
> a = 20
20
> a
20
> var a = 30
> a
30


> let b = 20
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 21
21


> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.