function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 3

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score 
}

// m apna koi function(increment), (printMe) bna rha hu ..jese map , splice , slice hote h in the prototype 
// ⚠️⚠️ new keyword is V.IMP for Interview 

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("yash", 24)
const tea = new createUser("bahrdwaj", 120)

chai.printMe()