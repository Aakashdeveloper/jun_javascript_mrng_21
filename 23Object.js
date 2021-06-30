var calc = {
    sum: function(a,b){return a+b},
    sub: (a,b) => {return a-b}
}
undefined
calc.sum(3,5)
8
calc.sub(5,2)
3

var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `insert into ${table} name,city values(${data.name}, ${data.city})`}
}

dbQuery.find('student')
"Select * from student"
dbQuery.find('employee')
"Select * from employee"
dbQuery.insert('employee',{name:'John',city:'Amsterdam'})
"insert into employee name,city values(John, Amsterdam)"

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English',
    lang:'Hindi'
}
// you can only update the property
Object.seal(movies)
{name: "Avengers", rating: 4.5, lang: "Hindi"}
movies.rating
4.5
movies.rating=4.6
4.6
movies
{name: "Avengers", rating: 4.6, lang: "Hindi"}
delete movies.lang
false
movies
{name: "Avengers", rating: 4.6, lang: "Hindi"}
movies.year="2010"
"2010"
movies


var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English',
    lang:'Hindi'
}
// we cannot update add or remove property
Object.freeze(movies)
{name: "Avengers", rating: 4.5, lang: "Hindi"}
movies.rating=4.6
4.6
movies
{name: "Avengers", rating: 4.5, lang: "Hindi"}