"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Akash")


let name = "akashh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];



let myObj = {
    name: "hitesh",
    age: 22,
}


// const myFunction = function(){
//     console.log("Hello world");
// }

console.log(typeof anotherId);


// At memory level


// All primitive datatype will store in stack memory
// All non primitive datatype will store in heap memory

let school1="abcs"
let school2=school1
school2="bcds"
console.table({school1,school2});


let user01={
    name:"akas",
    age:22
}
let user02=user01
user02.name="aman";
console.table({user01,user02});
console.log(typeof(id));