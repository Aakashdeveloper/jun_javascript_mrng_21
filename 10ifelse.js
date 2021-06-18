if(condition){
    //do something
}else{
    //do something
}

var a = 8978

if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 8978 is even

var a = 89781

if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM47:6 Number 89781 is odd


var name = "Aakash"
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} you are admin`)
}

// nested if else
var role = "Admin"
var name = "John"

if(role == "Admin"){
    if(name == "Aakash"){
        console.log(`Hi ${name} you are not a Admin`)
    }else if(name == "John"){
        console.log(`Hi ${name} you are Admin`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name == "Aakash"){
        console.log(`Hi ${name} you are not a user`)
    }else if(name == "John"){
        console.log(`Hi ${name} you are Admin User`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}else{
    console.log(`Hi ${name} you are not welcome`)
}

///// first
// and  > both condition should match 
// or  > any condition should match

var name = "Tina"
if(name == "Tina" || role=="Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}
VM52:3 Hi Tina you are welcome
undefined
var name = "Bhuimka"; var role="Admin"
if(name == "Tina" || role=="Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}
VM94:3 


var name = "Bhuimka"; var role="Admin"
if(name == "Tina" && role=="Admin"){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}
Hi Bhuimka you are not welcome


var name = "Bhuimka"; var role="Admin"
if(name == "Tina" && (role=="Admin" || role=="User")){
    console.log(`Hi ${name} you are welcome`)
}else{
    console.log(`Hi ${name} you are not welcome`)
}



/////////
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}
if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}

////////////
var a = 1
if(a){
    console.log(`Hi`)
}else{
    console.log(`Bie`)
}
"Hi"

var a = 0
if(a){
    console.log(`Hi`)
}else{
    console.log(`Bie`)
}
"Bie"

var a = -1
if(a){
    console.log(`Hi`)
}else{
    console.log(`Bie`)
}
"Hi"

/////////
Ternary> single line if else 
///////

var a = 10
a>10?"HI":"Bie"
"Bie"
var a = 10
a==10?"HI":"Bie"
"HI"

var a = 10
a>10?a+1:a-1

var a = 10
a==10?a+1:a-1
"HI"

var a = 10
a>10?a+1:a-1
9
var a = 10
a==10?a+1:a-1
11

condition?if condition true: if condition is false


// you should not use this
var a = 10
a==10?a+1:a-1?"HII":"BIE"
11

var a = 10
a>10?a+1:a-1?"HII":"BIE"

