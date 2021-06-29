localStorage
> presistant storage
> wrt to browser 
> we have remove manully

localStorage.setItem('tokenName','3464365445')
undefined
localStorage.getItem('tokenName')
"3464365445"
localStorage.getItem('tokenName')
"3464365445"
localStorage.removeItem('tokenName')
undefined
localStorage.getItem('tokenName')
null


sessionStorage
> temp storage
> save wrt to tab 

sessionStorage.setItem("myName","teststore")
undefined
sessionStorage.getItem("myName")
"teststore"
sessionStorage.removeItem("myName")
undefined
sessionStorage.getItem("myName")
null



cookies 
> save wrt to website
> expireIn time 

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.873554952.1623672193; city=delhi"

>>>>>>>>
document.cookie="city=delhi; expires=Fri, 18 Jun 2021 01:00:00 UTC"

"city=delhi; expires=Fri, 18 Jun 2021 01:00:00 UTC"

document.cookie
"_ga=GA1.2.1880173027.1602255983; _gid=GA1.2.873554952.1623672193; city=delhi"