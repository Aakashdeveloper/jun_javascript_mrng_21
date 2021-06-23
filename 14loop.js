for
while
do while
for of
for in > object
map
filter 

////////////////////////////////////////////////////////////////
for > generate series of value or help to iterate over array
////////////////////////////////////////////////////////////////
for(starting, condition, increment)

for(i=0;i<5;i++){
    console.log(i)
}

0
1
2
3
4


var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]
for(i=0;i<city.length;i++){
    console.log(`My City is ${city[i]}`)
}

My City is Delhi
My City is Mumbai
My City is Pune
My City is London
My City is Helsinki
My City is Amsterdam
My City is Venice
My City is Paris



var city =  ["Delhi", "Mumbai", "Pune",['Red','Yellow','Orange','Gray'], "Venice", "Paris"]
>>>>Wrong<<<<
for(i=0;i<city.length;i++){
    for(j=0;j<city[i].length;j++){
        console.log(city[i][j])
    }
}

>>>>Right<<<<<


for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])  
    }
}

///////////////////////////////////
while
////////////////////////////////
var i = 10;
while(i<5){
    console.log(i);
    i++
}


///////////////////////////////////
Do while
////////////////////////////////
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

///////////////////////////////////
for of >es6
////////////////////////////////
var city =  ["Delhi", "Mumbai", "Pune", "London", "Helsinki", "Amsterdam", "Venice", "Paris"]

for(mycity of city){
    console.log(mycity)
}


var city =  ["Delhi", "Mumbai", "Pune",['Red','Yellow','Orange','Gray'], "Venice", "Paris"]

for(mycity of city){
    if(Array.isArray(mycity)){
        for(colors of mycity){
            console.log(colors)
        }
    }else{
        console.log(mycity)
    }
}