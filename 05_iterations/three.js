// const coding = ["js", "ruby", "java", "python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return
// })
// console.log(values);
// O/P == undefined , doesn't return any value 

// -------------------------------------------------
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const values = myNums.filter( (num) => num > 4)
//     console.log(values);

// --------------------------------------------------

const newNums = []

myNums.filter( (num) => {
    if(num >4) {
        newNums.push(num)
    }
})
 
console.log(newNums);




