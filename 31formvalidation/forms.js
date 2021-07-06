/*(function(){
    alert("welcome to from")
}())*/

const validateFname = () => { 
    var name = document.getElementById('fname').value;
    if(name.trim().length==0){
        document.getElementById('fout').innerText="Please Enter first name"
    }else{
        document.getElementById('fout').innerText=""
    }
}


function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.trim().length == 0){
        document.getElementById('eout').innerText="Please enter email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$")== null){
            document.getElementById('eout').innerText="Please enter valid email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

const validatePassword = () => { 
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of password is 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.background="red";
        }else if(pwd.length<10){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.background="orange";  
        }
    }else{
        document.getElementById('ppout').style.background="green";  
    }
}


const validateCPassword = () => { 
    let pwd = document.getElementById('password').value;
    let cpwd = document.getElementById('cpassword').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Password does not match";
    }else{
        document.getElementById('cpout').innerText=""; 
    }
}


function getExp(){
    var exp = document.getElementById('exp').value;
    var totalexp = exp? exp : 0
    document.getElementById('exout').innerText=`Your total exp is ${totalexp} year`; 
}