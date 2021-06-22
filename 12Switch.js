// multiple Condition and multiple output (ifelse)
// one condition and one output (ternary)
// one condition and multiple output (switch)

var name = "Eva";

switch (name){
    case 'Aakash':
        console.log(`Hi case 1`) ;
        break;
    case 'Eva':
        console.log(`Hi case 2`);
        break;
    default:
        console.log(`Hi default case`);
}

var input = 2
switch (input%2){
    case 0:
        console.log(`Number ${input} is even`) ;
        break;
    case 1:
        console.log(`Number ${input} is out`) ;
        break;
    default:
        console.log(`default case`) ;
        break;
}

/*
if(input%2==0){
    console.log(`Number ${input} is even`) ;
}else{
    console.log(`Number ${input} is odd`) ;
}

input%2==0?`Number ${input} is even`:`Number ${input} is odd`
*/

switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`);
        break;
    case 1:
        console.log(`Today is monday`);
        break;
    case 2:
        console.log(`Today is tuesday`);
        break;
    default:
        console.log(`Number is odd`);
}
Today is tuesday

/*
if(new Date().getDay()===0){

}else if(new Date().getDay()==1){

}


if(input%2===0){

}else if(input%3===0){

}
*/