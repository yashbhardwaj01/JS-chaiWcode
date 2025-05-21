const movies = ["from", "unfriendedDarkWeb" , "spiderman"]
const sports = ["cricket" ,"football", "badminton"]

// movies.push(sports)
// console.log(movies); //  arrays inside array - arrays can take any data inside it like boolean, number , array(here).
// console.log(movies[3][1]);

// concat - returns as a new single array after combining 
const hobbies = movies.concat(sports)
// console.log(hobbies);

// shortcut - Spread operator 
const newHobbies = [...movies , ...sports]
// console.log(newHobbies);

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




