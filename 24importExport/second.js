//es5
//let myObj = require('./first');
//es6
import myObj from './first';

console.log(myObj.user)

console.log(myObj.dbQuery.find('Student'))

console.log(myObj.dbQuery.insert('employee',{name:myObj.user[0].name,city:myObj.user[0].city}))

/*
[ { name: 'Alvin', city: 'Boston' }, { name: 'Priya', city: 'Paris' } ]
Select * from Student
insert into employee name,city values(Alvin, Boston)
*/