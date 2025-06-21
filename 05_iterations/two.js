// for of 
//higher order array loops 

// const arr = [1,3,4,5,6]

// for (const num of arr){
//     // console.log(num);
    
// }

// // MAP 
// const map = new Map()
// map.set('81' , "Aligarh")
// map.set('14', "GZB.")
// map.set('13', "Delhi")

// // console.log(map);

// for(const [key, value] of map){
//     // console.log(key, ':- ', value);
    
// }

// // iterations on objects 

// const myObj = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// // for(const [key,value] of myObj){
// //     // console.log(key, ':- ', value);
// // }
// // O/P ---> not iterable through for of loop 

// // this could be done by for-in loop 
// const myObj1 = {
//     js: "javascript",
//     cpp: "C++",
//     py: "python",
//     swift: "swift by apple"
// }

// for(const key in myObj1){
//     console.log(`${key} shortcut is for ${myObj1[key]}`);
    
// }

// const programming = ["js", "cpp", "py", "java"]
// for(const key in programming){
//     console.log(key);
    
// }


//----------------------- for each loop ------------------

const coding = ["js", "python", "java", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
    
// })

//OR
// arrow function as call back fun. 

// coding.forEach( (item)=> {
//     console.log(item);  
// })

// OR

// function printMe(item){
//     console.log(item);  
// }
// coding.forEach(printMe);

coding.forEach( (item, index, coding)=> {
    console.log(item, index , coding);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
        {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})