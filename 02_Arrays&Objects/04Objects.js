const instauser = {}

instauser.id = "123abc"
instauser.name = "Sammy"
instauser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "akash",
            lastname: "dangwal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// let obj3 = { }
//  Object.assign(obj3, obj1, obj2, obj4)   //object.assign(target,objects which have to merge)....
//  console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)
console.log(instauser);

console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));

// console.log(instauser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course  

console.log(courseInstructor);

// OR
const{coursename:cname}=course;
console.log(cname);
