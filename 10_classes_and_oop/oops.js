// # object literals

const user = {
    username: "bhardwaj",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);  // O/P = {} (empty) at global level 

// ## Constructor function , gives new instance everytime --> new keyword 

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;  // left username is a variable in which username values are stored of right side username and we can give it any name but we usually gives same name as username ... 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

// const userOne = User("yash" , 11, true)
// const userTwo = User("bhardwaj", 15, false)
// console.log(userOne); => now it gives O/P =  username: 'bhardwaj',
                                           //   loginCount: 15,
                                           //   isLoggedIn: false
// means it overwrites the value of userOne ..which is not good , for this we use new keyword 


const userOne = new User("yash" , 11, true)
const userTwo = new User("bhardwaj", 15, false)
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor); // O/P constructor property is a reference
//  to self means it gives O/P as [Function: User] bcoz user is a function 
