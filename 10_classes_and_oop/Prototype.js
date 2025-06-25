let myName = "bhardwaj     "

// here i want to find the true Length of myName without using trim() function 
// console.log(myName.trueLength());

let myHeros = ["thor" , "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.yash = function(){
    console.log(`yash is present in all objects`);
}

// heroPower.yash()
// myHeros.yash()      ..... ye isliye possible ho paaya kyuki mene object ko power dedi sabse phle jo ki Higher entity h toh uske neeche vale sb m automatically power aa jaegi , as everything passes through objects at the end 



// INHERITANCE  - >prototype inheritance 
// OLD approach 

const User = {
    name: "yash",
    email: "yb@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User

// Modern approach 

Object.setPrototypeOf(TeachingSupport, Teacher)


// Now creating function for TRUE LENGTH 
// kabhi bhi kisi object , array ,string ko access krna ko simple first letter capital krke access kr skte h .. like Array , String ect . 

let anotherUsername = "yashbhardwaj     "

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
// ab string m trueLength implement kr diya h toh directly kr skte h 

"bhardwaj".trueLength()
"panditG".trueLength()

