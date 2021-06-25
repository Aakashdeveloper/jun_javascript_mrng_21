//local scope
//global scope

// encloseSomething
/*
var a =10 
function add(){
    var b = 20 
    return a+b 
}

console.log("add>>>",add())
console.log("a>>>",a)
console.log("b>>>",b)

add>>> 30
a>>> 10
console.log("b>>>",b)              
ReferenceError: b is not defined
*/

/*
var a =10 
var b;
function add(){
    b = 20 
    return a+b 
}

console.log("add>>>",add())
console.log("a>>>",a)
console.log("b>>>",b)
30
10
20*///////
/*
var a =10 
for(i=0;i<5;i++){
    var b = 20 
    console.log(a+b+i)
}
console.log("a>>>",a)
console.log("b>>>",b)

30
31
32
33
34
a>>> 10
b>>> 20*/

var a =10 
for(i=0;i<5;i++){
    let b = 20 
    console.log(a+b+i)
}

console.log("a>>>",a)
console.log("b>>>",b)

30
31
32
33
34
a>>> 10
console.log("b>>>",b)
ReferenceError: b is not defined


//curring function
function mul(a,b,c){
    return a*b*c
}

mul(1,2,3)
6

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

mul(1)(2)(3)
6