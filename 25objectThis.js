var firstname = "Michal"
var lastname = "Peter"

var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say hi to ${firstname} ${lastname}`
    }
}

console.log(sayHi.greet())
//Say hi to Michal Peter 



var firstname = "Michal"
var lastname = "Peter"

var sayHi = {
    firstname:'Zoe',
    lastname:'lisa',
    greet:function(){
        return `Say hi to ${this.firstname} ${this.lastname}`
    }
}
console.log(sayHi.greet())
// Say hi to Zoe lisa*///////
