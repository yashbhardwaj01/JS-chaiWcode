
const mySym = Symbol("key1")




const JsUser = {
    name: "Yash",
    "full name": "Yash Bhardwaj",
    age: 18,
    location: "ghaziabad",
    email: "yb@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);
console.log(JsUser);

// adding functions in objects 

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}
console.log(JsUser.greeting());




