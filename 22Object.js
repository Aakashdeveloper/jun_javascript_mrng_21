var moviename = "Avenger"
var movieRating = 4.5
var movieLang = "English"

var moviename1 = "Jab We Met"
var movieRating1 = 4.1
var movieLang1 = "Hindi"



typeof(movies)
"object"

movies.name
"Avengers"
movies.rating
4.5
movies.lang
"English"

movies['lang']
"English"
movies['name']
"Avengers"

movies.ind="Hollywood"
"Hollywood"
movies
{name: "Avengers", rating: 4.5, lang: "English", ind: "Hollywood"}
delete movies.rating
true
movies
{name: "Avengers", lang: "English", ind: "Hollywood"}

movies
{name: "Avengers", lang: "English", ind: "Hollywood"}
movies.lang="Hindi"
"Hindi"
movies
{name: "Avengers", lang: "Hindi", ind: "Hollywood"}
movies['rating']=4
4
movies
{name: "Avengers", lang: "Hindi", ind: "Hollywood", rating: 4}

// literal notation
var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English',
    lang:'Hindi'
}

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English',
    lang:'Hindi'
}

movies
{name: "Avengers", rating: 4.5, lang: "Hindi"}

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English',
    address:[
                {state:'Harayan',city:'Panipat'},
                {state:'Punjab',city:'Amritsar'},
                {state:'Maha',city:'Mumbai'}
            ]
}

////////////JSON/////////
JavaScript Object Notation    
/////////////////////////

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'English'
    },
    {
        name:'Jab We Met',
        rating:4.8,
        lang:'Hindi'
    },
    {
        name:'Mad Max',
        rating:3.8,
        lang:'English'
    }
]


movies[1].name
"Jab We Met"
movies[0].rating=4.3
4.3
movies


movies.map((data) => {return data.name})
["Avengers", "Jab We Met", "Mad Max"]

for(mymovies of movies){
    console.log(mymovies.name)
}


localStorage.setItem('mymovies',movies)

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'English'
}

for(key in movies){
    console.log(key)
}
name
rating
lang


for(key in movies){
    console.log(movies[key])
}
Avengers
4.5
English