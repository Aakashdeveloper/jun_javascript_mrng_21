var set1 = new Set();
undefined
set1
Set(0) {}[[Entries]]No propertiessize: (...)__proto__: Set
set1.add('hiii')
Set(1) {"hiii"}
set1
Set(1) {"hiii"}
set1.add('Test')
Set(2) {"hiii", "Test"}[[Entries]]0: "hiii"1: "Test"size: (...)__proto__: Set
set1
Set(2) {"hiii", "Test"}[[Entries]]0: "hiii"1: "Test"size: (...)__proto__: Set
set1.keys
ƒ values() { [native code] }
set1.values
ƒ values() { [native code] }
set1.values()
SetIterator {"hiii", "Test"}[[Entries]]0: "hiii"1: "Test"__proto__: Set Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "values"
var set2 = new Set([10, 20, 30, 40, 50]);
undefined
set2
Set(5) {10, 20, 30, 40, 50}
set1.add('Test1')
Set(3) {"hiii", "Test", "Test1"}
set1.add('Test1')
Set(3) {"hiii", "Test", "Test1"}
var getEntriesArry = set1.entries();
undefined
getEntriesArry.next()
{value: Array(2), done: false}
getEntriesArry.next().value()
VM435:1 Uncaught TypeError: getEntriesArry.next(...).value is not a function
    at <anonymous>:1:23
(anonymous) @ VM435:1
getEntriesArry.next().value
(2) ["Test1", "Test1"]
getEntriesArry.next().value
undefined
getEntriesArry.next().value
undefined

var getEntriesArry = set1.entries();
undefined
console.log(getEntriesArry.next().value);
VM53:1 (2) [50, 50]
undefined
console.log(getEntriesArry.next().value);
VM58:1 (2) [30, 30]
undefined
console.log(getEntriesArry.next().value);
VM63:1 (2) [40, 40]
undefined
console.log(getEntriesArry.next().value);
VM68:1 (2) [20, 20]
undefined
console.log(getEntriesArry.next().value);
VM73:1 (2) [10, 10]
undefined
console.log(getEntriesArry.next().value);

https://www.geeksforgeeks.org/sets-in-javascript/