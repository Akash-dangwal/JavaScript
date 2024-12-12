// Singleton (when object is create using constructor.) eg: Object.create, let user:new Object();


//Object literal
 
let mySymb=Symbol("key1")
let user={
    name:"Akash",
    "fullName":"Akash Dangwal",
    age:21,
    email:"akash@google.com",
    city:"Uk",
    [mySymb]:"newKey",
    loginDays:["mon","fri"]
}
// console.log(user.name);
// console.log(user["fullName"]);
// console.log(user);
user.email="akash@yahoo.com";
console.log(user.email);
// Object.freeze(user)  //Using freeze no changes will apply to the object...
user.email="akash@gmail.com"
console.log(user.email);

user.greeting=function(){
    console.log("Welcome!")
}
user.greeting2=function(){
    console.log(`Welcom! ${this.name}`);
}

console.log(user.greeting());
console.log(user.greeting2());
