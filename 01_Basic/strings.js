const name = "akash"
const repoCount = 50

console.log(name + repoCount + " Value"); // try to avoid this syntax

console.log(`Hi there! My name is ${name} and my repo count is ${repoCount}`); //use this syntax

const gameName = new String('akash-dg-com')  //Another way to declare string using constructor of string class

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 1)  //using slice we can use negative values
console.log(anotherString);

const newStringOne = "   akash    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akash.com/akash%20dangwal"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));