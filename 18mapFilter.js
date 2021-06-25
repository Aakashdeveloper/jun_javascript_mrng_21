var a = [4,5,7,3,8,9,11,21,34,54];
a.map((data) => {console.log(data)})

var a = [4,5,7,3,8,9,11,21,34,54];
a.map((data) => {return data*2})
[8, 10, 14, 6, 16, 18, 22, 42, 68, 108]


var a = [4,5,7,3,8,9,11,21,34,54];
a.map((data) => {return `<p>${data*2}</p>`})

var a = [4,5,7,3,8,9,11,21,34,54];
a.map((data) => {return data>15})
(10) [false, false, false, false, false, false, false, true, true, true]

> map is use to iterarte over the array
> it always return same length of output as input array 
> it is use to apply the logics like (math,return html)


var a = [4,5,7,3,8,9,11,21,34,54];
a.filter((data) => {return data>15})
[21, 34, 54]

> filter is use to filter out the values
> it may or may not return same length of output array 
> it only return those value for which output/condition is true


var a = [0,1,2,3,-1]
a.map((data) => { return data*2})
[0,2,4,6,-2]

a.filter((data) => { return data*2})
[1,2,3,-1]
0*2 = 0 false
1*2 = 2 true
2*2 = 4 true
3*2 = 6 true  
-1*2 = -2 true