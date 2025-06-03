// Functions 



// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2);
   
// }
// addTwoNumbers(3,4)
// addTwoNumbers(3,"a")
// addTwoNumbers(3, "4")
//----------------------------------------------------

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
    
// }
// const result = addTwoNumbers(3,4)   /* here function is not returning anything ,it is just printing sum , so result = undefined */
// console.log("Result: " , result); 
//---------------------------------------------------


function addTwoNumbers(number1 , number2){
    let result = number1 + number2
    return result

}
const result = addTwoNumbers(3,2)
// console.log("Result: " , result);
//---------------------------------------------------

function loginUserMessage(username){
    if(username === undefined ){                 // OR if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("yash"));
// console.log(loginUserMessage());  // Undefined just logged in ----handle through if statement 

// -------------------------------------------------

// shopping cart --> where we don't know no. of parameters like how many items user want to buy by adding it to cart
// REST OPERATOR ... (also k/a spread operator , name depends on use case here REST operator)
function calculateCartPrice(val1 ,val2 ,val3, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,3300,400,510));

// passing object in fucntion 

const user = {
    username: "yash",
    price: 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user) 
// OR 
handleObject({
    username: "sam",
    price: 120
})

// passing arrays in functions 
const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// OR
console.log(returnSecondValue([100,200,300]));



