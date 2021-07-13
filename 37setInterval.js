setInterval(function(){},time)

var myinterval = setInterval(function(){
    console.log(Math.random())
},3000)

0.013322139849311965
VM63:2 0.7372745150138598
VM63:2 0.5477649215265217
VM63:2 0.9492221789050055
VM63:2 0.7691484372421455
VM63:2 0.8552905232983996
VM63:2 0.4179000206818946
VM63:2 0.8677750146779881

clearInterval(myinterval)

///////////
> run only once after given amount of time 

setTimeout(function(){
    console.log(Math.random())
},3000)
0.31464491985609033