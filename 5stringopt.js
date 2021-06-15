var city = "LonDoN"
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"

var city = "LonDoN"
undefined
city[0]
"L"
city[1]
"o"
city.length
6
city[city.length-1]
"N"


var name = "  Nikita  "
undefined
name.length
10
name.trim()
"Nikita"
name.trim().length
6

var name = "   Bhumika .  "
undefined
name.trim()
"Bhumika ."

///case sensitive
var a = "john"
var b = "John"
undefined
a == b
false
a.toLowerCase() == b.toLowerCase()
true
a.toUpperCase() == b.toUpperCase()
true

var city = "aMsteDAm" ('Amsterdam')

var city = "aMsteDAm"
undefined
city.charAt(0)
"a"
city.charAt(1)
"M"

city.slice(1)
"MsteDAm"
city.slice(2)
"steDAm"
city.slice(4)
"eDAm"


var city = "aMsterDAm"
city.charAt(0).toUpperCase()

var city = "aMsterDAm"
city.slice(1).toLowerCase()
"mstedam"


var city = "aMsterDAm"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"


var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.slice(2)
"sterdam"
city.slice(2,5)
"ste"
city.slice(3,6)
"ter"
city.slice(3,7)
"terd"
city.slice(6,3)
""

var city = "Amsterdam"
city.slice(-1)
"m"
city.slice(-2)
"am"
city.slice(-4,-1)
"rda"
/////////first bigger than second > no output
city.slice(-1,-4)
""
city.slice(3,-1)
"terda"

city.slice(3,-2)
"terd"

city.slice(0,-1)
"Amsterda"

///// first -ve and second +ve > no output
city.slice(-1,3)
""