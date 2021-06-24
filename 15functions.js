function
method
arrow function
iffi function
generate function
/////////

var a = 10
var b = 20
a+b
30 

////////////////////////////////
KeyWord nameOfFunction(paramter){
    what function will return 
}

function add(a,b){
    return a+b 
}

add(1,2)
3
add(10,20)
30
add('Hi','Bie')
"HiBie"

function add(a,b,c){
    return a+b 
}

add(1,2,3)
3
function add(a,b,c){
    return a+b+c 
}
undefined
add(1,2,3)
6
add(1,2)
NaN

function add(a,b){
    return a+b
}
undefined
add(1,2,3)
3



function add(a,b,c){
    console.log("a>>>>>>",a)
    console.log("b>>>>>>",b)
    console.log("c>>>>>>",c)
    return a+b+c 
}

add(1,2,3)
VM917:2 a>>>>>> 1
VM917:3 b>>>>>> 2
VM917:4 c>>>>>> 3
6

add(1,2)
VM917:2 a>>>>>> 1
VM917:3 b>>>>>> 2
VM917:4 c>>>>>> undefined
NaN

1+undefined
NaN

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(5)
"Number 5 is odd"
isEven(50)
"Number 50 is even"


var data =['John','Keev','Ankit','John','Ankit']

function counter(name){
   var john = 0 
   var keev = 0;
   var ankit = 0;
   for(i=0;i<name.length;i++){
       if(name[i] == 'John'){
           john = john+1
       }else if(name[i] == 'Keev'){
            keev = keev+1
       }
       else if(name[i] == 'Ankit'){
        ankit = ankit+1
       }
   }

   var out = [john,keev,ankit]
   return out
}

var data =['John','Keev','Ankit','John','Ankit']
counter(data)
(3) [2, 1, 2]


////////Rest>Es6///////
function add(...args){
    console.log(args)
}
add(1,2,3)
VM1128:2 (3) [1, 2, 3]

add(1)
VM1128:2 [1]

add(1,2,3,4,5)
VM1128:2 (5) [1, 2, 3, 4, 5]

function add(...args){
    let sum = 0
    for(data of args){
        sum = sum+data
    }
    return sum
}

add(1,2)
3
add(1,2,4,5,7)
19
add(1)
1

add(1,1.2)
2.2
add(1,1.2,'a')
"2.2a"
add(1,1.2,'a',-1)
"2.2a-1"
add(1,1.2,-1)
1.2000000000000002


///////method////////
function add(a,b){
    return a+b 
}

var add = function(a,b){
    return a+b
}

add(1,2)

///////arrow es6////////
function add(a,b){
    return a+b 
}

var add = (a,b) => {
    return a+b
}
add(1,2)