var a = [1,2,3,4]
var b = ['a','b','c']

var a = [1,2,3,4]
undefined
console.log(...a)
VM1387:1 1 2 3 4
undefined
var b = ['a','b','c']
undefined
[1,2,...b,3,4]
(7) [1, 2, "a", "b", "c", 3, 4]

function add(a,b,c,d){
    console.log("a>>>>>>",a)
    console.log("b>>>>>>",b)
    console.log("c>>>>>>",c)
    console.log("d>>>>>>",d)
    return a+b+c+d
}

undefined
var data =[1,2,3,4]
undefined
add(data)
VM1478:2 a>>>>>> (4) [1, 2, 3, 4]
VM1478:3 b>>>>>> undefined
VM1478:4 c>>>>>> undefined
VM1478:5 d>>>>>> undefined
"1,2,3,4undefinedundefinedundefined"

add(...data)  ////spread
VM1478:2 a>>>>>> 1
VM1478:3 b>>>>>> 2
VM1478:4 c>>>>>> 3
VM1478:5 d>>>>>> 4



function add(...args){
    // give me the array 
    // console.log(args)   >>> [1,2,3,4,5,6,7]
    let sum = 0
    for(data of args){
        sum = sum+data
    }
    return sum
}


var data =[1,2,3,4,5,6,7]
add(...data)
/// pass value of array as one by one


/// if use as parameter of function than this is REST
// when play with array than SPREAD