// console.log(Math.PI);

// I want to change the value of PI as it is constant 

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 240,
    isAvailable: true
}
// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,"name",{
    // writable: false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}