// arrays -- resizable , means we can change the size

// const myArr = [0,1,2,3,4,5]
// console.log(myArr[1]);

// myArr.unshift(7) // insert the argument at starting 
// console.log(myArr);

// myArr.shift()  // remove the argument from starting
// console.log(myArr);

// const newArr = myArr.join("%")
// console.log(newArr);
// console.log(typeof newArr);

// slice and splice 

const myArr = [0,1,2,3,4,5]
console.log("Original array" , myArr);

//slice 
const myN1 = myArr.slice(1,3)
console.log(`sliced array ${myN1}`);
console.log("A" , myArr);


//splice 
const myN2 = myArr.splice(1,3)
console.log(`spliced array ${myN2}`)
console.log("B" , myArr);

