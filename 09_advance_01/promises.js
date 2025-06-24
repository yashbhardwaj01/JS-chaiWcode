// # Promise is future m hone vali cheez


// const promiseOne = new Promise(function(resolve, reject){
    // ## Do an asyn task 
    // ##  DB calls , cryptography , network 

//     setTimeout(function(){
//         console.log('Asyn task is complete');
//         resolve() // to connect then with resolve 
//     },1000)
// }) 

// promiseOne.then(function(){
//     console.log("Promise Consumed");
    
// })

// OR 

// new Promise(function(resolve,reject){
//     console.log("Async task 2");
//     resolve()
    
// },1000).then(function(){
//     console.log("Async 2 resolved");
    
// })

// -------------------------------------------------------------------------------------------------------------
// Passing data in resolve ---> resolve takes data as object / Arrays

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username : "bhardwaj" , email: "yb@google.com"})
//     })
// },1000)

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// -----------------------------------------------------------------------------------

// reject is for handling ERRORS 
// ## If we only want username not email then ....

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false // true
//         if(!error){
//             resolve({username: "yash" , email: "bhardwaj@123.com"})
//         } else{
//             reject('ERROR: Something went wrong')
//         }
//     })
// },1000)

// promiseFour.then((user) => {  // this returns username which is then passed to below then ---> k/a chaining
//     console.log(user);
//     return user.username
// }).then((username) => {   // takes above return username and prints it , error = false krdo phle  , O/P = yash
//     console.log(username);
// }).catch(function(error){  // handling error ---> REJECT
//     console.log(error); 
// }).finally(() => {
//     console.log("The promise is either resolved or rejected");
// })

// 

// ---------------------------------------------------------------------------------------------------------

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false // true
//         if(!error){
//             resolve({username: "javascript" , email: "bhardwaj@123.com"})
//         } else{
//             reject('ERROR: JS went wrong')
//         }
//     })
// },1000)

// async await --- wait krta h kaam hone ka ..jab kamm ho jata h tabhi aage bhadhta h ..else give error

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// consumePromiseFive()

//---------------------------------------------------------------------------------------------------------------

// async function getAllUsers(){
//     try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);

//     } catch (error) {
//         console.log("E: ", error);
        
//     }
    
// }
// getAllUsers()

// OR

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => { // data is any varaible storing the value returned from above then --> k/a thenable (chaining) 
    console.log(data);
    
})
.catch((error) => console.log(error));


