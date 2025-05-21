// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023 , 0, 23)
// let myCreatedDate = new Date(2023 , 0, 23 , 5, 3)
let myCreatedDate = new Date("01-14-2025") // MM-DD-YYYY
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); // gives time in milliSeconds
// console.log(myCreatedDate.getTime()); ---- to compare this with above time in MS , we also converted this date time into MS


let newDate = Date.now()
newDate.toLocaleString('default' , {
    weekday: "long" 
    
})

