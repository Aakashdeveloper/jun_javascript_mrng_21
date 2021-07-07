const url = "http://data.fixer.io/api/latest?access_key=10b816fb390183d161cc164e53490b9c";

//es5
function convert(){
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    // call api method
    fetch(url)
    // return promise
    .then((res) => res.json())
    // return data
    .then((data) => {
        var price = data.rates[out]
        var final = price * Number(amount)
        var result = `Convert Price of ${amount} Eur is ${final} ${out}`
        document.getElementById('output').innerText=result
    })
}

//Es6
async function convert(){
    var out = document.getElementById('out').value;
    var amount = document.getElementById('amount').value;
    var response = await fetch(url)
    var data = await response.json()
    var price = data.rates[out]
    var final = price * Number(amount)
    var result = `Convert Price of ${amount} Eur is ${final} ${out}`
    document.getElementById('output').innerText=result
}