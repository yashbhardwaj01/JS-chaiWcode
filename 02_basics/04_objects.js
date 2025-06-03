// declaring objects using constructor ---- singleton object 

const tinderuser = new Object()

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yash",
            lastname: "bhardwaj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// console.log(obj3); // same issue as arrays --- Not suitable 


// using Assign 
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// Using Spread Operator --- majorly used 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// objects inside array
const users = [
    {
        id: 1,
        email: "yb@kiet.edu"
    },

    {
        id: 1,
        email: "yb@kiet.edu"
    },

    {
        id: 1,
        email: "yb@kiet.edu"
    }
]

users[1].email

// console.log(tinderuser);
// --------------------------------------------------X-------------------------------------------------


// Destructuring of Objects 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "yash"
}

const {courseInstructor : Instructor} = course

console.log(Instructor);



