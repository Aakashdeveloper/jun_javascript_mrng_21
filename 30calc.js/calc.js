let calc = (opt) => {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    // here we are checking input value
    if(a.trim().length>0 || b.trim().length>0){
        if(isNaN(a) || isNaN(b)){
            out="Enter valid input" 
        }else{
            // if user click on add
            if(opt== "Add"){
                out = Number(a)+Number(b);
            // if user click on sub
            }else{
                out = Number(a)-Number(b);
            }
        } 
    }else{
        out="Please Enter value"  
    }
   
    document.getElementById('output').innerText=out
}

/*
function add(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value;
                var out = Number(a)+Number(b);
                document.getElementById('output').innerText=out
            }

            function sub(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value;
                var out = Number(a)-Number(b);
                document.getElementById('output').innerText=out
            }
*/